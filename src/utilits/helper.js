import review_img from "../assets/images/webp/review-image.webp";
import { ABOUT_PATH, BLOG_PATH, CONTACT_PATH, HOME_PATH, SERVICES_PATH } from "./Constant";

export const REVIEWS = [
    {
      img: review_img,
      name: 'GLEN SPARKLE, MIAMI',
    },
    {
      img: review_img,
      name: 'JANE DOE, NEW YORK',
    },
    {
      img: review_img,
      name: 'JOHN HOOD, NY',
    },
  ];
  export const NavLinks = [
    { path: HOME_PATH, title: "Home" },
    { path: ABOUT_PATH, title: "About" },
    { path: BLOG_PATH, title: "Blog" },
    { path: CONTACT_PATH, title: "Contact" },
    { path: SERVICES_PATH, title: "Services" },
  ];