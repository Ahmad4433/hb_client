import React from "react";
import { buildingImage } from "../../utils/images";
import SingleListing from "./SingleListing";
import "./listingList.css";
import ProjectCategorySlider from "../projects/ProjectCategorySlider";
import { SwiperSlide } from "swiper/react";
const ListingList = ({ title }) => {
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
  ];

  return (
    <div className="listing_main">
      <span className="section_title">{title}</span>
      <div className="listing_list">
        <ProjectCategorySlider>
          {listing.map((item, index) => (
            <SwiperSlide>
              <SingleListing key={index} item={item} />
            </SwiperSlide>
          ))}
        </ProjectCategorySlider>
      </div>
    </div>
  );
};

export default ListingList;
