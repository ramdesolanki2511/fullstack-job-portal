"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";

export default function Profile() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const res = await api.get("/profile/me");

    setUser(res.data);
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>My Profile</h1>

      <p>{user.name}</p>

      <p>{user.email}</p>

      <p>{user.skills}</p>

      <p>{user.experience}</p>
    </div>
  );
}
