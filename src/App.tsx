import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import { Job } from './types';
import { toast } from 'react-toastify';
import EditJobPage from './pages/EditJobPage';

// todo: refactor this methods into some api file...
const addJob = async (newJob: Job) => {
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

const updateJob = async (job: Job) => {
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

const deleteJob = async (id: string) => {
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route
        path="/jobs/:id"
        element={<JobPage deleteJob={deleteJob} />}
        loader={jobLoader}
      />
      <Route
        path="/jobs/edit/:id"
        element={<EditJobPage updateJobSubmit={updateJob} />}
        loader={jobLoader}
      />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
