import JobForm from '../components/JobForm';
import { addJob } from '../Utils/api';

const AddJobPage = () => {
  return <JobForm handleSubmit={addJob} redirectTo="/jobs" />;
};
export default AddJobPage;
