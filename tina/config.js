import { defineConfig } from "tinacms";
import Categories from "./collections/categories";
import Brands from "./collections/brands";
import ImageGallery from "./collections/imageGallery";
import About from "./collections/about";
import Titles from "./collections/titles";
import Stats from "./collections/stats";
import Teams from "./collections/teams";
import InstaGallery from "./collections/instaGallery";
import Testimonials from "./collections/testimonials";
import Prices from "./collections/prices";
import Features from "./collections/features";
import Blogs from "./collections/blogs";
import Authors from "./collections/authors";
import Banner from "./collections/banner";
import PersonalInfo from "./collections/personalInfo";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets/img",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      Categories,
      ImageGallery,
      Brands,
      About,
      Titles,
      Stats,
      Teams,
      InstaGallery,
      Testimonials,
      Prices,
      Features,
      Blogs,
      Authors,
      Banner,
      PersonalInfo,
    ],
  },
});
