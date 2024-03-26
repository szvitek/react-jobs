import { toast } from "react-toastify";
import { Job } from "../types";

export const addJob = async (newJob: Job) => {
  try {
    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    toast.success('Job added successfully');
  } catch (error) {
    console.error(error);
    toast.error('Something went wrong');
  }
};

export const updateJob = async (job: Job) => {
  try {
    await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    toast.success('Job updated successfully');
  } catch (error) {
    console.error(error);
    toast.error('Something went wrong');
  }
};

export const deleteJob = async (id: string) => {
  try {
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    toast.success('Job deleted successfully');
  } catch (error) {
    console.error(error);
    toast.error('Something went wrong');
  }
};
