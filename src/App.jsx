App.jsx
import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const Chat = lazy(() => import("./pages/Chat"));
const Landing = lazy(() => import("./pages/Landing"));
const Home = lazy(() => import("./pages/Home")); 
const Error = lazy(() => import("./pages/Error"));

function App() {
  const isUserSignedIn = () => {
    const token = localStorage.getItem("token");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    if (!token || !tokenExpiration) return false;
    return Date.now() < parseInt(tokenExpiration, 10);
  };

  const ProtectedRoute = ({ children }) => {
    return isUserSignedIn() ? children : <Navigate to="/signin" />;
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
