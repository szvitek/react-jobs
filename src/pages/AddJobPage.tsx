import { Job } from '../types';
import JobForm from '../components/JobForm';

type Props = {
  addJobSubmit: (newJob: Job) => void;
};

const AddJobPage = ({ addJobSubmit }: Props) => {
  return <JobForm onSubmitForm={addJobSubmit} redirectTo="/jobs" />;
};
export default AddJobPage;
