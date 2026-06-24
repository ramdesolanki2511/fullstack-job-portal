"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";

export default function AdminPage() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const res = await api.get("/admin/dashboard");

    setStats(res.data);
  };

  if (!stats) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>
        Users:
        {stats.totalUsers}
      </h2>

      <h2>
        Recruiters:
        {stats.totalRecruiters}
      </h2>

      <h2>
        Candidates:
        {stats.totalCandidates}
      </h2>

      <h2>
        Jobs:
        {stats.totalJobs}
      </h2>

      <h2>
        Applications:
        {stats.totalApplications}
      </h2>
    </div>
  );
}
