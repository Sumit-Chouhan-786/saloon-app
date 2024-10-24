import {
  ABOUT_PATH,
  BLOG_PATH,
  CONTACT_PATH,
  HOME_PATH,
  SERVICES_PATH,
} from "./Constant";
import tool from "../assets/images/png/scissor.png";
import beard from "../assets/images/png/beard.png";
import facial from "../assets/images/png/facial.png";
import razor from "../assets/images/png/razor.png";
import mustache from "../assets/images/png/mustache.png";
import hairStyling from "../assets/images/png/hair.png";
import review_img from "../assets/images/webp/review-image.webp";
// nav links
export const NavLinks = [
  { path: HOME_PATH, title: "Home" },
  { path: ABOUT_PATH, title: "About" },
  { path: BLOG_PATH, title: "Blog" },
  { path: CONTACT_PATH, title: "Contact" },
  { path: SERVICES_PATH, title: "Services" },
];
export const servicesContent = [
  { image: tool, title: "HAIRCUT & BEARD TRIM" },
  { image: beard, title: "SHAVES & HAIRCUT" },
  { image: razor, title: "FACIAL & SHAVE" },
  { image: facial, title: "FACIAL" },
  { image: mustache, title: "MUSTACHE TRIMMING" },
  { image: hairStyling, title: "HAIR STYLING" },
];
export const REVIEWS = [
  {
    img: review_img,
    name: "GLEN SPARKLE, MIAMI",
  },
  {
    img: review_img,
    name: "JANE DOE, NEW YORK",
  },
  {
    img: review_img,
    name: "JOHN HOOD, NY",
  },
];
