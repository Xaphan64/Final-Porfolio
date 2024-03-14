import blogApp from "../assets/blog_app_preview.png";
import pmApp from "../assets/pm_app_preview.png";
import ecommerceApp from "../assets/ecommerce_app_preview.png";

import blog from "../assets/blog_preview.jpg";
import pm from "../assets/pm_preview.avif";
import ecommerce from "../assets/ecommerce_preview.jpg";

export const ProjectList = [
  {
    name: "The Blogs",
    image: blog,
    imageApp: blogApp,
    skills: "HTML, SCSS, JavaScript, Fetch API",
    github: "https://github.com/Xaphan64/The-Blogs",
    redirect: "",
  },

  {
    name: "Project Management App",
    image: pm,
    imageApp: pmApp,
    skills: "HTML, SCSS, JavaScript, Local Storage",
    github: "https://github.com/Xaphan64/Project-Management",
    redirect: "https://project-management-lac.vercel.app/",
  },

  {
    name: "aStore (ecommerce app)",
    image: ecommerce,
    imageApp: ecommerceApp,
    skills: "HTML, SCSS, JavaScript, Local Storage, Axios",
    github: "https://github.com/Xaphan64/aStore",
    redirect: "",
  },
];
