import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

    const baseUrl = "https://webdev-backends.onrender.com";
    const abeUrl = `${baseUrl}/abe`;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
      setUser({ token });
    }
  }, []);

  const login = async (username, password) => {
    try {
      const res = await axios.post(`${abeUrl}/login`, { username, password });
      localStorage.setItem("token", res.data.token);
      axios.defaults.headers.common["Authorization"] = res.data.token;
      setUser({ token: res.data.token });
      return true; // ✅ login succeeded
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid username or password. Please try again.");
      return false; // ❌ login failed
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
