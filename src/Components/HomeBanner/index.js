import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/main_banner_web_Fashor_W_and_more_f7053a6d63/main_banner_web_Fashor_W_and_more_f7053a6d63.png"
            className="w-100"
            alt="Banner Images"
          />
        </div>

        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/main_banner_web_Skechers_Adidas_and_more_4355c5edda/main_banner_web_Skechers_Adidas_and_more_4355c5edda.png"
            className="w-100"
            alt="Banner Images"
          />
        </div>

        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/main_banner_web_Allen_Solly_Louis_Philips_and_more_f012cafa15/main_banner_web_Allen_Solly_Louis_Philips_and_more_f012cafa15.png"
            className="w-100"
            alt="Banner Images"
          />
        </div>

        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/eoss_main_banner_web_56324b74ba/eoss_main_banner_web_56324b74ba.png"
            className="w-100"
            alt="Banner Images"
          />
        </div>

        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/Main_Banner_Web_Titan_Fossil_and_more_efc9bc4dce/Main_Banner_Web_Titan_Fossil_and_more_efc9bc4dce.png"
            className="w-100"
            alt="Banner Images"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
