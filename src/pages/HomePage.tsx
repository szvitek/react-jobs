import Cards from "../components/Cards";
import Hero from "../components/Hero";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Cards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
}
export default HomePage