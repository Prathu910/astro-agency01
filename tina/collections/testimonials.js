const Testimonials = {
  name: "testimonials",
  label: "Testimonials",
  path: "src/content/testimonials",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "string",
      required: true,
      isTitle: true,
    },
    {
      name: "position",
      label: "Position",
      type: "string",
    },
    {
      name: "rating",
      label: "Rating",
      type: "number",
    },
    {
      name: "review",
      label: "Review",
      type: "string",
    },
    {
      name: "image",
      label: "Image",
      type: "image",
    },
  ],
};

export default Testimonials;
