const Stats = {
  name: "stats",
  label: "Stats",
  path: "src/content/stats",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "stats1",
      label: "Stats 1",
      type: "object",
      isList: true,
      required: true,
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
        },
        {
          name: "value",
          label: "Value",
          type: "number",
        },
      ],
    },
    {
      name: "stats2",
      label: "Stats 2",
      type: "object",
      required: true,
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
        },
        {
          name: "value",
          label: "Value",
          type: "number",
        },
      ],
    },
    {
      name: "stats3",
      label: "Stats 3",
      type: "object",
      required: true,
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
        },
        {
          name: "value",
          label: "Value",
          type: "number",
        },
      ],
    },
  ],
};

export default Stats;
