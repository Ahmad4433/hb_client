import React from "react";
import Slider from "../components/Home/Slider";
import ProjectsList from "../components/projects/ProjectsList";
import ComingSoon from "../components/Home/banners/ComingSoon";
import ListingList from "../components/listings/ListingList";
import AgentList from "../components/agents/AgentList";
import BranchList from "../components/branches/BranchList";
import ReviewList from "../components/reviews/ReviewList";
const Home = () => {
  return (
    <div>
      <Slider />
      <ProjectsList />
      <ComingSoon />
      <ListingList title={"new House for sale"} />
      <ListingList title="used house for sale" />
      <ListingList title="used house for rent" />
      <AgentList />
      <BranchList />
      <ReviewList />
    </div>
  );
};

export default Home;
