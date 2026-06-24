"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/services/api";

export default function JobDetails() {
  const params = useParams();

  const [job, setJob] = useState<any>(null);

  useEffect(() => {
    getJob();
  }, []);

  const getJob = async () => {
    try {
      const res = await api.get(`/jobs/${params.id}`);

      setJob(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const applyJob = async () => {
    try {
      const res = await api.post("/applications/apply", {
        jobId: params.id,
      });

      alert("Applied Successfully");
    } catch (error: any) {
      alert(error.response?.data?.message);
    }
  };

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <h1>{job.title}</h1>

      <p>{job.company}</p>

      <p>{job.location}</p>

      <p>{job.salary}</p>

      <p>{job.description}</p>

      <button onClick={applyJob}>Apply Now</button>
    </div>
  );
}
