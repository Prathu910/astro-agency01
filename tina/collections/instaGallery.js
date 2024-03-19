const InstaGallery = {
  name: "instaGallery",
  label: "InstaGallery",
  path: "src/content/instaGallery",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "instaGallery",
      label: "Gallery Images",
      type: "image",
      list: true,
    },
  ],
};

export default InstaGallery;
