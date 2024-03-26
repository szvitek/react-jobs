import { useLoaderData } from 'react-router-dom';
import { Job } from '../types';
import JobForm from '../components/JobForm';

type Props = {
  updateJobSubmit: (newJob: Job) => void;
};

const EditJobPage = ({ updateJobSubmit }: Props) => {
  const job = useLoaderData() as Job;

  return (
    <JobForm
      job={job}
      onSubmitForm={updateJobSubmit}
      redirectTo={`/jobs/${job.id}`}
    />
  );
};
export default EditJobPage;
