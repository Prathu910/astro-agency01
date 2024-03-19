const ImageGallery = {
  name: "imageGallery",
  label: "Image Gallery",
  path: "src/content/imageGallery",
  fields: [
    {
      name: "category",
      label: "Category",
      type: "reference",
      collections: ["categories"],
    },
    {
      name: "image",
      label: "Gallery Image",
      type: "image",
      required: true,
      isTitle: true,
    },
  ],
};

export default ImageGallery;
