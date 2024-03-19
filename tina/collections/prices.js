const Prices = {
  name: "prices",
  label: "Prices",
  path: "src/content/prices",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
      isTitle: true,
    },
    {
      name: "price",
      label: "Price",
      type: "number",
    },
    {
      name: "link",
      label: "Link",
      type: "string",
    },
    {
      name: "type",
      label: "Subscription Plan",
      type: "string",
      component: "select",
      options: ["Per Month", "Per Year"],
    },
    {
      name: "points",
      label: "Points",
      type: "string",
      list: true,
    },
  ],
};

export default Prices;
