import React from "react";
import { bannerImages } from "../../utils/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import "swiper/css/effect-fade";
import "swiper/css";
import "./homeSlider.css";

const Slider = () => {
  return (
    <div className="home_slider_main">
      <div className="home_slider_overlay">
        <div className="home_slider_overlay_content">
          <h2>
            Unlock a <span className="orange bold">New</span> Chapter of Living
          </h2>
          <p>
            Explore <span className="orange">premium</span> properties and
            investment opportunities across prime locations. Your ideal home
            awaits.
          </p>
          <div className="home_hero_actions">
            <Button endIcon={<EastIcon />} variant="contained">
              Explore
            </Button>
          </div>
        </div>
      </div>
      <Swiper
        loop
        slidesPerView={1}
        autoplay={{
          delay: 4000,
        }}
        effect="fade"
        speed={1000} // Duration of the fade transition in milliseconds
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, EffectFade]}
      >
        {bannerImages.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="home_slider_image">
                <img src={item} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
