"use client";

import { useState } from "react";
import api from "@/services/api";

export default function CreateJobForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    salary: "",
    experience: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/jobs", form);

      alert("Job Created");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        onChange={(e) =>
          setForm({
            ...form,
            title: e.target.value,
          })
        }
      />

      <input
        placeholder="Company"
        onChange={(e) =>
          setForm({
            ...form,
            company: e.target.value,
          })
        }
      />

      <input
        placeholder="Location"
        onChange={(e) =>
          setForm({
            ...form,
            location: e.target.value,
          })
        }
      />

      <input
        placeholder="Salary"
        onChange={(e) =>
          setForm({
            ...form,
            salary: e.target.value,
          })
        }
      />

      <input
        placeholder="Experience"
        onChange={(e) =>
          setForm({
            ...form,
            experience: e.target.value,
          })
        }
      />

      <textarea
        placeholder="Description"
        onChange={(e) =>
          setForm({
            ...form,
            description: e.target.value,
          })
        }
      />

      <button>Create Job</button>
    </form>
  );
}
