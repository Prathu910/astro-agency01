import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import BlogCard from "./common/BlogCard";
import moment from "moment";

const BlogsComponent = ({ blogsData, titleObj }) => {
  const { title, tag } = titleObj;
  const pagination = {
    el: ".containerForBullets",
    type: "bullets",
    bulletClass: "swiper-custom-bullet",
    bulletActiveClass: "swiper-custom-bullet-active",
    clickable: true,
  };
  return (
    <div className="article-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title">
              <div className="width">
                <div className="sub-t">{tag}</div>
                <h2>{title}</h2>
                <a className="main-btn" href="/blogs" area-label="Go to blogs.">
                  <span className="hidden">Go to blogs.</span>
                  <i className="ri-pencil-line"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="article-content">
              <Swiper
                spaceBetween={30}
                // slidesPerView={2}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 1,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                }}
                pagination={pagination}
                loop
                className=""
                modules={[Pagination]}
              >
                {blogsData
                  .slice(0, 4)
                  .map(({ id, slug, data: { date, title, previewImg } }) => {
                    return (
                      <SwiperSlide key={id}>
                        {" "}
                        <BlogCard
                          date={moment(date).format("DD/MM/YYYY")}
                          link={slug}
                          title={title}
                          thumb={previewImg}
                        />{" "}
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
              <div className="containerForBullets"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsComponent;
