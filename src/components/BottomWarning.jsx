import { Link } from "react-router-dom";

function BottomWarning({ children, buttonText, to }) {
  return (
    <div className="mt-4 flex flex-row justify-center items-center space-x-2">
      <p className="font-medium text-gray-700">{children}</p>
      <Link 
        className="font-medium text-indigo-600 underline transition duration-300 ease-in-out transform hover:scale-105 hover:text-indigo-800" 
        to={to}
      >
        {buttonText}
      </Link>
    </div>
  );
}

export default BottomWarning;
