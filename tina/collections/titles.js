const Titles = {
  name: "titles",
  label: "Titles",
  path: "src/content/titles",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "banner",
      label: "Banner",
      type: "object",
      required: true,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
          required: true,
        },
        {
          name: "tag",
          label: "Tag",
          type: "string",
          required: true,
        },
        {
          name: "desc",
          label: "Summary",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "about",
      label: "About",
      type: "object",
      required: true,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
          required: true,
        },
        {
          name: "tag",
          label: "Tag",
          type: "string",
          required: true,
        },
        {
          name: "desc",
          label: "Summary",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "imageGallery",
      label: "Image Gallery",
      type: "object",
      required: true,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
          required: true,
        },
        {
          name: "tag",
          label: "Tag",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "price",
      label: "Price",
      type: "object",
      required: true,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
          required: true,
        },
        {
          name: "tag",
          label: "Tag",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "blogs",
      label: "Blogs",
      type: "object",
      required: true,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
          required: true,
        },
        {
          name: "tag",
          label: "Tag",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "contact",
      label: "Contact",
      type: "object",
      required: true,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
          required: true,
        },
        {
          name: "tag",
          label: "Tag",
          type: "string",
          required: true,
        },
        {
          name: "desc",
          label: "Summary",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "footer",
      label: "Footer",
      type: "object",
      required: true,
      fields: [
        {
          name: "desc",
          label: "Summary",
          type: "string",
          required: true,
        },
      ],
    },
  ],
};

export default Titles;
