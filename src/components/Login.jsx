import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../firebase"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      login(email); 
      setMessage("You have successfully signed in!");
      setEmail("");
      setPassword("");
      navigate('/dashboard');
    } catch (err) {
      setMessage("Error signing in. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans">
      {/* Left - Sign In Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 ml-20">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left"  >Sign In</h2>
          <p className="text-zinc-500 mb-10">Enter your email and password to sign in!</p>

           {/* Add message display here */}
           {message && (
            <div className={`w-full max-w-sm p-4 mb-4 rounded-md ${
              message.includes("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
            }`}>
              {message}
            </div>
          )}

          {/* Google Sign-In */}
          <button
            className="flex items-center border border-gray-300 px-4 py-2 rounded-md w-full max-w-sm justify-center gap-2 mb-4"
          
          >
            <FcGoogle size={24} />
            Sign in with Google
          </button>

          {/* Email and Password Sign-In */}
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          onSubmit={handleSubmit}   >
              Sign In
            </button>
          </form>

          <div className="mt-4 text-sm text-center md:text-left w-full max-w-sm">
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
            <p>
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">Sign up</a>
            </p>
          </div>
        </div>

        <footer className="text-sm text-gray-500 text-center mt-10 md:text-left">
          FAQs · Privacy Policy · Terms & Conditions · Refund Policy
        </footer>
      </div>

      {/* Right - Black Panel */}
      <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center items-center px-6 py-12 text-center">
        <img src="/Layer_x0020_1.png" alt="Logo" className="mb-4 w-50 h-20" />
        <p className="max-w-md">
          "Our web projects run smoother, launch faster, and look sharper — all thanks to this CMS."
        </p>
        <p className="text-zinc-300 mt-10">
          Ishwar Acharya - CEO Neptastic
        </p>
      </div>
    </div>
  );
};

export default Login;
