import axios from "axios";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (!email || !password) {
      toast.error("All fields are required", { position: "top-center", theme: "colored" });
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post("http://localhost:3000/auth/signin", {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("tokenExpiration", Date.now() + 3600000); // Token expires in 1 hour

      toast.success("Sign In Successful!", { position: "top-center", theme: "colored" });

      // Navigate to /home after successful login
      const timeoutId = setTimeout(() => {
        navigate("/home"); // Redirects to /home
      }, 2000);

      return () => clearTimeout(timeoutId);
    } catch (err) {
      toast.error(err.response?.data?.message || "An error occurred during sign-in", {
        position: "top-center",
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
          <Heading children={"Sign In"} className="text-3xl font-bold text-gray-900 text-center" />
          <SubHeading children={"Access your account with your credentials"} className="text-gray-500 text-center mt-1" />
        </div>
        <div className="space-y-4">
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
            children={loading ? "Signing In..." : "Sign In"}
            onClick={handleSignIn}
            disabled={loading}
          />
          <BottomWarning
            children={"Don't have an account?"}
            buttonText={"Sign Up"}
            to={"/signup"}
            className="mt-4 text-center text-sm text-gray-600"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
