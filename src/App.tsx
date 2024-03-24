import Cards from './components/Cards';
import Hero from './components/Hero';
import JobsList from './components/JobListings';
import Navbar from './components/Navbar';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <JobsList />
      <ViewAllJobs />
    </>
  );
};
export default App;
