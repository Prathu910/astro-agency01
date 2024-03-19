import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

import TeamCard from "./common/TeamCard";

const TeamComponent = ({ parentClass, teamsData }) => {
  const swiperRef = useRef();
  useEffect(() => {
    import("swiper/css");
  }, []);
  const social_link = [
    {
      id: 1,
      link: teamsData[0]?.data?.socialLinks?.fb,
      icon: "ri-facebook-fill",
    },
    {
      id: 2,
      link: teamsData[1]?.data?.socialLinks?.insta,
      icon: "ri-instagram-line",
    },
    {
      id: 3,
      link: teamsData[2]?.data?.socialLinks?.linkedin,
      icon: "ri-linkedin-fill",
    },
  ];

  return (
    <div className={`team-area pt-100 ${parentClass}`}>
      <div className="container">
        <div className="position-relative">
          <Swiper
            spaceBetween={30}
            // slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop
            className="image-courser"
          >
            {teamsData.map(({ id, data }) => {
              const { name, role, image } = data;
              return (
                <SwiperSlide key={id}>
                  {" "}
                  <TeamCard
                    img={image}
                    name={name}
                    position={role}
                    socal_link={social_link}
                  />{" "}
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start  navigation ">
            <div onClick={() => swiperRef.current?.slidePrev()}>
              <i className="fi fi-tr-angle-small-left"></i>
            </div>
            <div onClick={() => swiperRef.current?.slideNext()}>
              <i className="fi fi-tr-angle-small-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;
