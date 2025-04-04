
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      navigate("/dashboard");
    } catch (err) {
      alert("Registration failed: " + err.message);
    }
  };

  return (
    <form onSubmit={handleRegister} className="p-6">
      <h2 className="text-xl mb-4">Register</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="block mb-2 p-2 border" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="block mb-4 p-2 border" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Create Account</button>
    </form>
  );
}
