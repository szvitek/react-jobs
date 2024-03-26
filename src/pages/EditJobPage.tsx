import { useLoaderData } from 'react-router-dom';
import { Job } from '../types';
import JobForm from '../components/JobForm';
import { updateJob } from '../Utils/api';

const EditJobPage = () => {
  const job = useLoaderData() as Job;

  return (
    <JobForm
      job={job}
      handleSubmit={updateJob}
      redirectTo={`/jobs/${job.id}`}
    />
  );
};
export default EditJobPage;
