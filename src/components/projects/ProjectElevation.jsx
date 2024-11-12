import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { buildingImage } from "../../utils/images";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";
const ProjectElevation = ({ elevation }) => {
  return (
    <>
      <Swiper
        loop
        autoplay={{ delay: 2500 }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay, Pagination]}
      >
        {elevation?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="single_project_elevation">
                <img src={item} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProjectElevation;
