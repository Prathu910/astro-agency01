const Brands = {
  name: "brands",
  label: "Brands",
  path: "src/content/brands",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "brand",
      label: "Brand Image",
      type: "image",
      list: true,
    },
  ],
};

export default Brands;
