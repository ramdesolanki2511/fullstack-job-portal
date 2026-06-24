"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import api from "@/services/api";

export default function Applicants() {
  const params = useParams();

  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    getApplicants();
  }, []);

  const getApplicants = async () => {
    const res = await api.get(`/applications/job/${params.id}`);

    setApplicants(res.data);
  };

  const updateStatus = async (id: string, status: string) => {
    await api.put(`/applications/${id}/status`, {
      status,
    });

    getApplicants();
  };

  return (
    <div>
      <h1>Applicants</h1>

      {applicants.map((app: any) => (
        <div key={app._id}>
          <h3>{app.candidateId?.name}</h3>

          <p>{app.candidateId?.email}</p>

          <p>{app.status}</p>

          <button onClick={() => updateStatus(app._id, "Shortlisted")}>
            Shortlist
          </button>

          <button onClick={() => updateStatus(app._id, "Rejected")}>
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}
