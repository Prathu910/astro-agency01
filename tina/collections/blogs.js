const Blogs = {
  name: "blogs",
  label: "Blogs",
  path: "src/content/blogs",
  fields: [
    {
      name: "author",
      label: "Author",
      type: "reference",
      collections: ["authors"],
    },
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
      isTitle: true,
    },
    {
      name: "date",
      label: "Date",
      type: "datetime",
    },
    {
      name: "bannerImg",
      label: "Banner Image",
      type: "image",
    },
    {
      name: "previewImg",
      label: "Preview Image",
      type: "image",
    },
    {
      name: "content",
      label: "Content",
      type: "rich-text",
      isBody: true,
    },
  ],
};

export default Blogs;
