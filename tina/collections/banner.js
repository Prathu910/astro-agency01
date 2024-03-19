const Banner = {
  name: "banner",
  label: "Banner",
  path: "src/content/banner",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "character",
      label: "Character Image",
      type: "image",
      required: true,
    },
    {
      name: "bgImg",
      label: "Background Image",
      type: "image",
      required: true,
    },
  ],
};

export default Banner;
