import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TestimonialCard from "./common/TestimonialCard";
// import "swiper/css";

const Testimonial = ({ testimonialsData }) => {
  const swiperRef = useRef();
  useEffect(() => {
    import("swiper/css");
  }, []);

  return (
    <div className="testimonial-area ptb-100">
      <div className="container">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="image-courser"
          modules={[Navigation]}
        >
          {testimonialsData.map(({ id, data }) => {
            const { image, position, rating, review, name } = data;
            return (
              <SwiperSlide key={id}>
                <TestimonialCard
                  img={image}
                  position={position}
                  name={name}
                  rating={rating}
                  review={review}
                />
              </SwiperSlide>
            );
          })}
          <div className="d-flex align-items-center justify-content-center mt-3 gap-2  ">
            <div onClick={() => swiperRef.current?.slidePrev()}>
              <i className="fi fi-tr-arrow-left"></i>
            </div>
            <div onClick={() => swiperRef.current?.slideNext()}>
              <i className="fi fi-tr-arrow-right"></i>
            </div>
          </div>
        </Swiper>

        {testimonialsData.map(({ id, data }) => {
          const { image } = data;
          return (
            <div key={id} className="user">
              <img src={image} alt="image" width={80} height={80} />
            </div>
          );
        })}
      </div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
    </div>
  );
};

export default Testimonial;
