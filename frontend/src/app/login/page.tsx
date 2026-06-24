"use client";

import { useState } from "react";
import api from "@/services/api";
import { useAuth } from "@/context/AuthContext";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function Login() {
  const { setUser } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      const decoded = jwtDecode(res.data.token);

      setUser(decoded);

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button title="Login" loading={loading} />
    </form>
  );
}
