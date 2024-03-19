module.exports = {
  // ...
  extends: [
    // ...
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:astro/recommended",
    "plugin:eslint-plugin-react",
  ],
  // ...
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro", "*.jsx", "*.js"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      // parserOptions: {
      //   parser: "@typescript-eslint/parser",
      //   extraFileExtensions: [".astro", "*.jsx", "*.js"],
      // },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
        "astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "error",
      },
    },
    // ...
  ],
};
