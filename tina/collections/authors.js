const Authors = {
  name: "authors",
  label: "Authors",
  path: "src/content/authors",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      name: "desc",
      label: "Description",
      type: "string",
    },
    {
      name: "profession",
      label: "Professions",
      type: "string",
    },
    {
      name: "img",
      label: "Image",
      type: "image",
    },
    {
      name: "socialLinks",
      label: "Social Links",
      type: "object",
      fields: [
        {
          name: "fb",
          label: "Facebook",
          type: "string",
        },
        {
          name: "insta",
          label: "Instagram",
          type: "string",
        },
        {
          name: "linkedin",
          label: "LinkedIn",
          type: "string",
        },
        {
          name: "twitter",
          label: "Twitter",
          type: "string",
        },
      ],
    },
  ],
};

export default Authors;
