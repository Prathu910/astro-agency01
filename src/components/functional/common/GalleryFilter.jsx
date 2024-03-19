import React, { useEffect } from "react";

const GalleryFilter = ({
  categories,
  setActiveGroup,
  activeGroup,
  setFiltered,
  galleryData,
}) => {
  useEffect(() => {
    if (activeGroup === "All") {
      setFiltered(galleryData);
      return;
    }
    const filtered = galleryData.filter(({ category }) =>
      category.includes(activeGroup)
    );
    setFiltered(filtered);
  }, [activeGroup]);

  return (
    <div className="filter-container">
      <ul className="">
        <li
          onClick={() => setActiveGroup("All")}
          className={`item-list ${activeGroup === "All" ? "on" : ""} `}
        >
          All
        </li>
        {categories.map(({ data, id }) => (
          <li
            key={id}
            onClick={() => setActiveGroup(data?.category)}
            className={`item-list ${
              activeGroup === data?.category ? "on" : ""
            } `}
          >
            {data?.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GalleryFilter;
