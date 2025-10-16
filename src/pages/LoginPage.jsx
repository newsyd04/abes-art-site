import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
      navigate("/upload");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3EFEA] font-[Poppins]">
      <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-sm border border-[#EAE4DA]">
        <h1 className="text-3xl font-semibold text-center text-[#2E2520] mb-6">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#E07A5F]"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#E07A5F]"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#E07A5F] text-white font-semibold py-3 rounded-lg hover:bg-[#D45A3C] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
