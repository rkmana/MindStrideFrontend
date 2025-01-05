import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleSignOut = () => {
      // Clear localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");

      // Notify user about successful logout
      toast.success("You have successfully signed out.", {
        position: "bottom-center",
        theme: "colored",
      });

      // Redirect to sign-in page after 2 seconds
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    };

    handleSignOut();
  }, [navigate]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300 animate-fadeIn">
      <ToastContainer />
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Signing you out...</h2>
        <p className="text-gray-500 mt-2">
          Please wait while we log you out and redirect you to the sign-in page.
        </p>
      </div>
    </div>
  );
}

export default SignOut;
