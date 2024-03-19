const PersonalInfo = {
  name: "personalInfo",
  label: "Personal Information",
  path: "src/content/personalInfo",
  fields: [
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
    {
      name: "siteName",
      label: "Site Name",
      type: "string",
    },
    {
      name: "newsLetter",
      label: "Newsletter Text",
      type: "string",
    },
  ],
};

export default PersonalInfo;
