import { Job } from '../types';
import { type LoaderFunctionArgs, useLoaderData } from 'react-router-dom';

const JobPage = () => {
  const job = useLoaderData() as Job;

  return <h1>{job.title}</h1>;
};

export const jobLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<Job> => {
  const res = await fetch(`/api/jobs/${params.id}`);
  return res.json();
};

export default JobPage;
