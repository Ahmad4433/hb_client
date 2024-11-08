import React, { useEffect, useRef, useState } from "react";
import "./singleProject.css";
// import { buildingImage } from "../../utils/images";
import { FcApproval } from "react-icons/fc";
import { Card } from "@mui/material";
import { IoLocationOutline } from "react-icons/io5";
import ProjectCategory from "./ProjectCategory";
import YouTubeEmbed from "./YoutubeEmbed";
import { MdOutlinePayments } from "react-icons/md";
import { TiChartAreaOutline } from "react-icons/ti";
import MapIframe from "./MapIfram";
import { LiaParkingSolid } from "react-icons/lia";
import { MdOutlineElevator } from "react-icons/md";
import { FaSwimmingPool, FaWifi } from "react-icons/fa";
import { GiGymBag, GiCctvCamera } from "react-icons/gi";
import ProjectAmmenties from "./ProjectAmmenties";
import ProjectElevation from "./ProjectElevation";
import { buildingImage } from "../../utils/images";
import ProjectCategorySlider from "./ProjectCategorySlider";
import { SwiperSlide } from "swiper/react";
const SingleProject = ({ index }) => {
  const elevationRef = useRef(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const elementWidth = elevationRef.current.offsetWidth;
    setWidth(elementWidth);
  }, []);

  const categories = [
    {
      category: "1 bed apartment",
      downpayment: 600000,
      area: "450 sqf",
      img: buildingImage[0],
    },
    {
      category: "1 bed apartment",
      downpayment: 600000,
      area: "450 sqf",
      img: buildingImage[1],
    },
    {
      category: "1 bed apartment",
      downpayment: 600000,
      area: "450 sqf",
      img: buildingImage[2],
    },
    {
      category: "1 bed apartment",
      downpayment: 650000,
      area: "450 sqf",
      img: buildingImage[2],
    },
    {
      category: "1 bed apartment",
      downpayment: 350000,
      area: "450 sqf",
      img: buildingImage[2],
    },
    {
      category: "1 bed apartment",
      downpayment: 350000,
      area: "450 sqf",
      img: buildingImage[2],
    },
    {
      category: "1 bed apartment",
      downpayment: 350000,
      area: "450 sqf",
      img: buildingImage[2],
    },
    {
      category: "1 bed apartment",
      downpayment: 350000,
      area: "450 sqf",
      img: buildingImage[2],
    },
    {
      category: "1 bed apartment",
      downpayment: 350000,
      area: "450 sqf",
      img: buildingImage[2],
    },
  ];

  const projectAmenities = [
    { title: "Double Elevator", icon: <MdOutlineElevator /> },
    { title: "Dedicated Parking", icon: <LiaParkingSolid /> },
    { title: "Swimming Pool", icon: <FaSwimmingPool /> },
    { title: "Wi-Fi", icon: <FaWifi /> },
    { title: "Gymnasium", icon: <GiGymBag /> },
    { title: "CCTV Surveillance", icon: <GiCctvCamera /> },
    { title: "CCTV Surveillance", icon: <GiCctvCamera /> },
    { title: "CCTV Surveillance", icon: <GiCctvCamera /> },
    { title: "CCTV Surveillance", icon: <GiCctvCamera /> },
  ];

  return (
    <div className="single_project_main">
      <div className="single_project_container">
        <p className="single_project_heading">18-park residential</p>
        <div className="single_project_high_lights">
          <Card>
            <div className="single_project_high_light">
              <IoLocationOutline />
              <p style={{ textAlign: "center" }} className="captlize">
                main canal bank road opposite to bahria town main gate
              </p>
            </div>
          </Card>
          <Card>
            <div className="single_project_high_light">
              <MdOutlinePayments />
              <p className="single_project_downpayment">10%</p>
              <span>Down Payment</span>
            </div>
          </Card>
          <Card>
            <div className="single_project_high_light">
              <TiChartAreaOutline />
              <p className="single_project_downpayment">4 Kanal</p>
              <span>Total Area</span>
            </div>
          </Card>
          <Card>
            <div className="single_project_high_light">
              <FcApproval />
              <p className="single_project_downpayment">Approved</p>
              <span>by LDA</span>
            </div>
          </Card>
        </div>
        <div
          ref={elevationRef}
          className={`single_project_content ${
            index % 2 === 0 ? "reverse" : ""
          }`}
        >
          <div style={{ width: width / 2 + "px" }}>
            <span className="section_title">Elevation</span>
            <ProjectElevation />
          </div>
          <div className="single_project_video">
            <span className="section_title">Site Video</span>
            <YouTubeEmbed videoId="Cqe_Fz7Emak" />
          </div>
        </div>
        <div>
          <span className="section_title">Major Categories</span>
          <div>
            <ProjectCategorySlider>
              {categories.map((item, index) => (
                <SwiperSlide>
                  <ProjectCategory key={index} item={item} />
                </SwiperSlide>
              ))}
            </ProjectCategorySlider>
          </div>
        </div>
        <div className="project_features">
          <div>
            <span className="section_title">Ammenties</span>
            <div className="single_project_ammenties">
              {projectAmenities.map((item, index) => (
                <ProjectAmmenties item={item} key={index} />
              ))}
            </div>
          </div>
          <div className="project_map_location">
            <span className="section_title">Location</span>
            <MapIframe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
