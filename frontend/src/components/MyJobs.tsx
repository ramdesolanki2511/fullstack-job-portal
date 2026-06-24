"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";

export default function MyJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await api.get("/jobs/my-jobs");

    setJobs(res.data);
  };

  return (
    <div>
      <h2>My Jobs</h2>

      {jobs.map((job: any) => (
        <div key={job._id}>
          <h3>{job.title}</h3>

          <p>{job.company}</p>
        </div>
      ))}
    </div>
  );
}
