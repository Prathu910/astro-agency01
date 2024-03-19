import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import "swiper/css";
import { useEffect } from "react";

const InstagramGallery = ({ galleryData }) => {
  useEffect(() => {
    import("swiper/css");
  }, []);
  return (
    <div className="insta-gallery">
      <div className="conatiner-fluid">
        <div className="ins-gallery owl-carousel owl-theme">
          <Swiper
            spaceBetween={0}
            // slidesPerView={10}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 5,
              },
              992: {
                slidesPerView: 6,
              },
              1200: {
                slidesPerView: 10,
              },
            }}
            autoplay
            loop
            className=""
            modules={[Autoplay]}
          >
            {galleryData.map((img, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="items">
                    <a href={"#"} target="_blank">
                      <img src={img} alt="image" width={168} height={168} />
                      <i className="ri-instagram-line"></i>
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default InstagramGallery;
