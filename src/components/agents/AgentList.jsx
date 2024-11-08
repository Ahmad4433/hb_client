import React from "react";
import "./agentList.css";
import { buildingImage } from "../../utils/images";
import SingleAgent from "./SingleAgent";
import { SwiperSlide } from "swiper/react";
import avatar from "../../assets/avatar.jpg";
import ProjectCategorySlider from "../projects/ProjectCategorySlider";
const AgentList = () => {
  const agents = [
    {
      name: "name",
      mobile: "03104641760",
      img: avatar,
      desigination: "sales executive",
    },
    {
      name: "name",
      mobile: "03104641760",
      img: avatar,
      desigination: "sales executive",
    },
    {
      name: "name",
      mobile: "03104641760",
      img: avatar,
      desigination: "sales executive",
    },
    {
      name: "name",
      mobile: "03104641760",
      img: avatar,
      desigination: "sales executive",
    },
    {
      name: "name",
      mobile: "03104641760",
      img: avatar,
      desigination: "sales executive",
    },
  ];

  return (
    <div className="agent_list_main">
      <span className="section_title">Meet Our Agents</span>
      <div className="agent_container">
        <ProjectCategorySlider show={5}>
          {agents?.map((item, index) => (
            <SwiperSlide key={index}>
              <SingleAgent agent={item} />
            </SwiperSlide>
          ))}
        </ProjectCategorySlider>
      </div>
    </div>
  );
};

export default AgentList;
