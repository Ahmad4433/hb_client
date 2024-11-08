import React, { useEffect, useState } from "react";
import "./reviewList.css";
import { SwiperSlide } from "swiper/react";
import ProjectCategorySlider from "../projects/ProjectCategorySlider";
import SingleReview from "./SingleReview";
import { Button } from "@mui/material";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
const ReviewList = ({ show }) => {
  const [path, setPath] = useState(null);

  useEffect(() => {
    const pathName = window.location.pathname;
    setPath(pathName);
  }, []);

  const reviews = [
    {
      name: "John Smith",
      review:
        "Excellent service and very helpful in finding the perfect home. Highly recommend!",
      date: new Date("2024-08-15"),
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      review:
        "The process was smooth, and the team was knowledgeable. Very satisfied!",
      date: new Date("2024-09-10"),
      rating: 4,
    },
    {
      name: "Michael Brown",
      review:
        "Good experience overall, but there were a few delays in paperwork.",
      date: new Date("2024-09-22"),
      rating: 4,
    },
    {
      name: "Emily Davis",
      review:
        "Friendly staff and great property options. Made everything stress-free.",
      date: new Date("2024-10-05"),
      rating: 5,
    },
    {
      name: "David Wilson",
      review:
        "The property was as described, but communication could have been better.",
      date: new Date("2024-10-18"),
      rating: 3,
    },
    {
      name: "Jessica Martinez",
      review:
        "Found my dream house with their help! Super professional and reliable.",
      date: new Date("2024-10-25"),
      rating: 5,
    },
    {
      name: "Daniel White",
      review: "Great for first-time buyers, very informative and patient.",
      date: new Date("2024-11-01"),
      rating: 4,
    },
    {
      name: "Sophia Lewis",
      review: "Some hiccups in the process, but they resolved issues quickly.",
      date: new Date("2024-11-01"),
      rating: 4,
    },
  ];

  return (
    <div className="review_list_main">
      <div className="flex_center_between">
        <span className="section_title">Reviews</span>
        {path?.includes("/listing/detail") && (
          <div>
            <span>Add New Review</span>
            <Button variant="text" color="primary">
              <ControlPointOutlinedIcon />
            </Button>
          </div>
        )}
      </div>
      <ProjectCategorySlider show={show || 5}>
        {reviews.map((item, index) => (
          <SwiperSlide>
            <SingleReview item={item} key={index} />
          </SwiperSlide>
        ))}
      </ProjectCategorySlider>
    </div>
  );
};

export default ReviewList;
