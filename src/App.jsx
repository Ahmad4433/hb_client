import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import "./components/common/common.css";
import DealsList from "./components/deals/DealsList";
import AllListings from "./components/listings/AllListings";
import ListingDetail from "./components/listing-detail/ListingDetail";
import BranchPagesList from "./components/branches/branchPages/BranchPagesList";
import About from "./components/about/About";
import AddProjectCategory from "./components/admin/project-categories/AddProjectCategory";
import AddUser from "./components/admin/users/AddUser";
import AddListing from "./components/admin/listings/AddListing";
// admin pages
import AddProject from "./components/admin/projects/AddProject";

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/listing/detail" element={<ListingDetail />} />
          <Route path="/listings" element={<AllListings />} />
          <Route path="/deals" element={<DealsList />} />
          <Route path="/branches" element={<BranchPagesList />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/project/add" element={<AddProject />} />
        <Route path="/project/category/add" element={<AddProjectCategory />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/listing/add" element={<AddListing />} />
      </Routes>
    </div>
  );
};

export default App;
