const About = {
  name: "about",
  label: "About",
  path: "src/content/about",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "previewImg",
      label: "Preview Image",
      type: "image",
      required: true,
    },
    {
      name: "bannerImg",
      label: "Banner Image",
      type: "image",
      required: true,
    },
  ],
};

export default About;
