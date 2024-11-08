import React from "react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const ProjectCategorySlider = ({ children, show }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={show || 4}
      navigation={true}
      modules={[Navigation]}
    >
      {children}
    </Swiper>
  );
};

export default ProjectCategorySlider;
