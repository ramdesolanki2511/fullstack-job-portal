"use client";

import Link from "next/link";

import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <Link href="/">Home</Link>

      <Link href="/jobs">Jobs</Link>

      {!user && (
        <>
          <Link href="/login">Login</Link>

          <Link href="/register">Register</Link>
        </>
      )}

      {user?.role === "recruiter" && (
        <Link href="/recruiter">Recruiter Panel</Link>
      )}

      {user?.role === "admin" && <Link href="/admin">Admin</Link>}

      {user && (
        <>
          <Link href="/dashboard">Dashboard</Link>

          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}
