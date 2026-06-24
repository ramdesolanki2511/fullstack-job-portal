"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";
import Link from "next/link";

export default function MyJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await api.get("/jobs/my-jobs");

    setJobs(res.data);
  };

  const deleteJob = async (id: string) => {
    const confirmed = window.confirm("Delete Job?");

    if (!confirmed) return;

    await api.delete(`/jobs/${id}`);

    fetchJobs();
  };

  return (
    <div>
      <h2>My Jobs</h2>
      {jobs.map((job: any) => (
        <div key={job._id}>
          <h3>{job.title}</h3>

          <p>{job.company}</p>

          <button onClick={() => deleteJob(job._id)}>Delete</button>

          <Link href={`/recruiter/jobs/${job._id}`}>View Applicants</Link>
        </div>
      ))}
    </div>
  );
}
