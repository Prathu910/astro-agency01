import React from "react";

const TestimonialCard = ({ review, name, position, rating }) => {
  return (
    <div className="testimonial-item">
      <ul>
        {Array.from({ length: rating }).map((_el, idx) => (
          <li key={idx}>
            <i className="ri-star-s-fill"></i>
          </li>
        ))}
      </ul>
      <p>{review}</p>
      <h4>{name}</h4>
      <span>{position}</span>
    </div>
  );
};

export default TestimonialCard;
