"use client";

import CreateJobForm from "@/components/CreateJobForm";
import MyJobs from "@/components/MyJobs";
import RoleProtectedRoute from "@/components/RoleProtectedRoute";

export default function RecruiterPage() {
  return (
    <RoleProtectedRoute role="recruiter">
      <div>
        <h1>Recruiter Dashboard</h1>
        <CreateJobForm />
        <MyJobs />
      </div>
    </RoleProtectedRoute>
  );
}
