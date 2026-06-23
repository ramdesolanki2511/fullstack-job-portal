"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await api.get("/jobs");

    setJobs(res.data);
  };

  return (
    <div>
      <h1>Jobs</h1>

      {jobs.map((job: any) => (
        <div key={job._id}>
          <h3>{job.title}</h3>

          <p>{job.company}</p>

          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
}
