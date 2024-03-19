const Features = {
  name: "features",
  label: "Features",
  path: "src/content/features",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
      isTitle: true,
    },
    {
      name: "description",
      label: "Description",
      type: "rich-text",
      isBody: true,
    },
    {
      name: "icon",
      label: "Icon",
      type: "string",
    },
    {
      name: "link",
      label: "Link",
      type: "string",
    },
  ],
};

export default Features;
