const Teams = {
  name: "teams",
  label: "Teams",
  path: "src/content/teams",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      name: "role",
      label: "Role",
      type: "string",
    },
    {
      name: "image",
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
      ],
    },
  ],
};

export default Teams;
