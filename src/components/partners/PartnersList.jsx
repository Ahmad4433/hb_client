import React from "react";
import "./partnersList.css";
import ProjectCategorySlider from "../projects/ProjectCategorySlider";
import { SwiperSlide } from "swiper/react";
import { buildingImage } from "../../utils/images";
import SinglePartner from "./SinglePartner";
const PartnersList = () => {
  const partners = [
    { img: buildingImage[0] },
    { img: buildingImage[1] },
    { img: buildingImage[2] },
    { img: buildingImage[0] },
    { img: buildingImage[1] },
    { img: buildingImage[2] },
    { img: buildingImage[0] },
  ];

  return (
    <div className="partners_main">
      <span className="section_title">Our Partners</span>
      <div>
        <ProjectCategorySlider show={5}>
          {partners.map((item, index) => (
            <SwiperSlide key={index}>
              <SinglePartner item={item} />
            </SwiperSlide>
          ))}
        </ProjectCategorySlider>
      </div>
    </div>
  );
};

export default PartnersList;
