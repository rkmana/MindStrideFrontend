import axios from "axios";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!name || !age || !email || !password) {
      toast.error("All fields are required. Age should be between 18 and 60.", {
        position: "top-center", // Changed position to top-center
        theme: "colored",
      });
      return;
    }

    if (age < 18 || age > 60) {
      toast.error("Age should be between 18 and 60.", { position: "top-center", theme: "colored" }); // Changed position to top-center
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post("http://localhost:3000/auth/signup", {
        name,
        age,
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      toast.success("Signup Successful!", { position: "top-center", theme: "colored" }); // Changed position to top-center

      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 3000);

      return () => clearTimeout(timeoutId);
    } catch (err) {
      toast.error(err.response?.data?.message || "An error occurred during signup", {
        position: "top-center", // Changed position to top-center
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-green-200 to-blue-300 animate-fadeIn">
      <ToastContainer />
      <div className="rounded-xl bg-white p-6 shadow-xl w-full max-w-md transform transition-transform duration-500 hover:scale-105 animate-slideInUp">
        <div className="mb-6">
          <Heading children={"Sign Up"} className="text-3xl font-bold text-gray-900 text-center" />
          <SubHeading children={"Create your account to get started"} className="text-gray-500 text-center mt-1" />
        </div>
        <div className="space-y-4">
          <InputBox
            type="text"
            label="Full Name"
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <select
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="" disabled>
                Select your age
              </option>
              {[...Array(43)].map((_, i) => (
                <option key={i} value={i + 18}>
                  {i + 18}
                </option>
              ))}
            </select>
          </div>
          <InputBox
            type="text"
            label="Email"
            placeholder="johndoe@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBox
            type="password"
            label="Password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col mt-6">
          <Button
            className={`w-full ${loading ? "opacity-50 cursor-not-allowed" : "hover:from-green-600 hover:to-blue-600"} bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold transition-transform transform`}
            children={loading ? "Signing Up..." : "Sign Up"}
            onClick={handleSignUp}
            disabled={loading}
          />
          <BottomWarning
            children={"Already have an account?"}
            buttonText={"Sign In"}
            to={"/signin"}
            className="mt-4 text-center text-sm text-gray-600"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
