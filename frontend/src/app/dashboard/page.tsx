"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Dashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    const res = await api.get("/applications/my-applications");

    setApplications(res.data);
  };

  return (
    <ProtectedRoute>
      <div>
        <h1>My Applications</h1>

        {applications.map((app: any) => (
          <div key={app._id}>
            <h3>{app.jobId.title}</h3>

            <p>
              Status:
              {app.status}
            </p>
          </div>
        ))}
      </div>
    </ProtectedRoute>
  );
}
