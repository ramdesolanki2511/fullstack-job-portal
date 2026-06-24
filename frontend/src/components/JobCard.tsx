import Link from "next/link";

export default function JobCard({ job }: any) {
  return (
    <div>
      <h3>{job.title}</h3>

      <p>{job.company}</p>

      <p>{job.location}</p>

      <p>{job.experience}</p>

      <Link href={`/jobs/${job._id}`}>View Details</Link>
    </div>
  );
}
