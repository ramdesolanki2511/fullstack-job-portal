"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import Link from "next/link";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    fetchJobs();
  }, [page]);

  const fetchJobs = async () => {
    const res = await api.get(
      `/jobs?keyword=${keyword}&location=${location}&page=${page}&sort=${sort}`,
    );

    setJobs(res.data.jobs);
    setTotalPages(res.data.totalPages);
  };

  return (
    <div>
      <h1>Jobs</h1>

      <input
        placeholder="Search Job"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button onClick={fetchJobs}>Search</button>

      <div>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="latest">Latest</option>

          <option value="oldest">Oldest</option>
        </select>
      </div>

      {jobs.map((job: any) => (
        <div key={job._id}>
          <h3>{job.title}</h3>

          <p>{job.company}</p>

          <p>{job.location}</p>

          <Link href={`/jobs/${job._id}`}>View Details</Link>
        </div>
      ))}

      {jobs.length === 0 && <p>No Jobs Found</p>}

      <div>
        {Array.from({
          length: totalPages,
        }).map((_, index) => (
          <button key={index} onClick={() => setPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
