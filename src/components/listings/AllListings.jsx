import React from "react";
import "./allListings.css";
import SingleListing from "./SingleListing";
import { buildingImage } from "../../utils/images";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  TextField,
  Autocomplete,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import PagePagination from "../common/PagePagination";
import { IoKey } from "react-icons/io5";
import { FaFilePen } from "react-icons/fa6";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { FaHouse } from "react-icons/fa6";
import { AiFillShop } from "react-icons/ai";
import { FaHouseFloodWater } from "react-icons/fa6";
import { BsFillHouseDownFill } from "react-icons/bs";
import { BsFillHouseUpFill } from "react-icons/bs";

const AllListings = () => {
  const listing = [
    {
      title: "10 marla house for sale in bahria town lahore",
      location: "bahri town c block",
      price: 45000000,
      img: buildingImage[0],
      area: "10 marla",
      bath: 4,
      bed: 4,
    },
    {
      title: "10 marla house for sale in bahria town lahore",
      location: "bahri town c block",
      price: 45000000,
      img: buildingImage[0],
      area: "10 marla",
      bath: 4,
      bed: 4,
    },
    {
      title: "10 marla house for sale in bahria town lahore",
      location: "bahri town c block",
      price: 45000000,
      img: buildingImage[0],
      area: "10 marla",
      bath: 4,
      bed: 4,
    },
    {
      title: "10 marla house for sale in bahria town lahore",
      location: "bahri town c block",
      price: 45000000,
      img: buildingImage[0],
      area: "10 marla",
      bath: 4,
      bed: 4,
    },
    {
      title: "10 marla house for sale in bahria town lahore",
      location: "bahri town c block",
      price: 45000000,
      img: buildingImage[0],
      area: "10 marla",
      bath: 4,
      bed: 4,
    },
    {
      title: "10 marla house for sale in bahria town lahore",
      location: "bahri town c block",
      price: 45000000,
      img: buildingImage[0],
      area: "10 marla",
      bath: 4,
      bed: 4,
    },
    {
      title: "10 marla house for sale in bahria town lahore",
      location: "bahri town c block",
      price: 45000000,
      img: buildingImage[0],
      area: "10 marla",
      bath: 4,
      bed: 4,
    },
    {
      title: "10 marla house for sale in bahria town lahore",
      location: "bahri town c block",
      price: 45000000,
      img: buildingImage[0],
      area: "10 marla",
      bath: 4,
      bed: 4,
    },
    {
      title: "10 marla house for sale in bahria town lahore",
      location: "bahri town c block",
      price: 45000000,
      img: buildingImage[0],
      area: "10 marla",
      bath: 4,
      bed: 4,
    },
    {
      title: "10 marla house for sale in bahria town lahore",
      location: "bahri town c block",
      price: 45000000,
      img: buildingImage[0],
      area: "10 marla",
      bath: 4,
      bed: 4,
    },
    {
      title: "10 marla house for sale in bahria town lahore",
      location: "bahri town c block",
      price: 45000000,
      img: buildingImage[0],
      area: "10 marla",
      bath: 4,
      bed: 4,
    },
    {
      title: "10 marla house for sale in bahria town lahore",
      location: "bahri town c block",
      price: 45000000,
      img: buildingImage[0],
      area: "10 marla",
      bath: 4,
      bed: 4,
    },
  ];

  const types = [
    { title: "house", icon: <FaHouse /> },
    { title: "shop", icon: <AiFillShop /> },
    { title: "plot", icon: <FaHouseFloodWater /> },
    { title: "upper portion", icon: <BsFillHouseUpFill /> },
    { title: "lower portion", icon: <BsFillHouseDownFill /> },
  ];

  const purpose = [
    { title: "rent", icon: <IoKey /> },
    { title: "buy", icon: <FaFilePen /> },
  ];

  return (
    <div className="all_listing_main">
      <div className="listing_banner">
        <div className="listin_banner_overlay">
          <p>Explore Our Exclusive Property Listings</p>
          <p>
            Find your perfect home or investment opportunity from our wide range
            of properties, including apartments, houses, and commercial spaces.
            With prime locations, modern amenities, and flexible payment plans,
            we cater to all your real estate needs.
          </p>
        </div>
      </div>

      <div className="all_listing_container">
        <Accordion sx={{ marginBottom: "1rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Apply Filter
          </AccordionSummary>
          <AccordionDetails>
            <div className="all_listing_filters">
              <div>
                <span className="section_title small ">Property Purpose</span>
                <div className="listing_filter_purpose">
                  {purpose.map((item, index) => {
                    return (
                      <div key={index}>
                        <>{item?.icon}</>
                        <span>{item?.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <span className="section_title small">
                  Select Budget & location
                </span>
                <div className="all-listing_inputs">
                  <TextField
                    fullWidth
                    label="Min Price"
                    type="number"
                    size="small"
                  />
                  <TextField
                    fullWidth
                    label="Max Price"
                    type="number"
                    size="small"
                  />

                  <Autocomplete
                    fullWidth
                    size="small"
                    options={["abc", "def", "ghi"]}
                    renderInput={(params) => (
                      <TextField {...params} label="Select Location" />
                    )}
                  />
                </div>
              </div>

              <div>
                <span className="section_title small">
                  Select Property Type
                </span>
                <div className="all_listings_filter_types">
                  {types.map((item, index) => {
                    return (
                      <div key={index} className="listig_filter_type_item">
                        <>{item?.icon}</>
                        <span>{item?.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="listing_filter_actions">
                <Button
                  endIcon={<SearchIcon />}
                  variant="contained"
                  color="primary"
                >
                  search
                </Button>
                <Button
                  endIcon={<CloseIcon />}
                  variant="outlined"
                  color="primary"
                >
                  clear filter
                </Button>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <div className="all_listing_list">
          {listing.map((item, index) => (
            <SingleListing key={index} item={item} />
          ))}
        </div>
        <PagePagination count={10} />
      </div>
    </div>
  );
};

export default AllListings;
