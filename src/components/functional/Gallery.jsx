import React, { useEffect, useState } from "react";
import GalleryFilter from "./common/GalleryFilter";
import GalleryCard from "./common/GalleryCard";
import { client } from "../../../tina/__generated__/client";

const Gallery = ({ galleryData, categories }) => {
  const [filtered, setFiltered] = useState([]);
  const [allData, setAllData] = useState([]);
  const [activeGroup, setActiveGroup] = useState("All");

  function getFileContents(filePath) {
    const parts = filePath.split("/");
    const filename = parts[parts.length - 1];
    return filename;
  }

  const getCategory = async (path) => {
    const singleCategory = await client.queries.categories({
      relativePath: path,
    });
    return singleCategory;
  };

  const processGalleryData = async () => {
    const filteredData = await Promise.all(
      galleryData.map(async (item) => {
        const categoryPromise = getCategory(
          getFileContents(item?.data?.category)
        );
        const category = await categoryPromise;
        return {
          img: item?.data?.image,
          category: category.data?.categories?.category,
        };
      })
    );
    setAllData(filteredData);
  };

  useEffect(() => {
    processGalleryData();
  }, []);

  return (
    <div className="gallery-area ptb-100 overflow-hidden">
      <div className="container">
        <div className="gallery-table">
          <div className="section-title">
            <div className="width">
              <div className="sub-t">Image Generation</div>
              <h2>Unveil New Creative Horizons with Models</h2>
            </div>
            {allData.length > 0 && (
              <GalleryFilter
                categories={categories}
                activeGroup={activeGroup}
                setActiveGroup={setActiveGroup}
                galleryData={allData}
                setFiltered={setFiltered}
              />
            )}
          </div>

          <div className="gallery">
            {filtered?.length > 0 && (
              <div>
                {filtered?.map(({ img }, idx) => {
                  return <GalleryCard img={img} key={idx} />;
                })}
              </div>
            )}
          </div>
          <div className="gallery-btn">
            <a className="main-btn" href="/portfolio">
              <span></span>
              <i className="ri-function-line"></i> View All Images
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
