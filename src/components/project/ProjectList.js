import blog from "../assets/blog_preview.jpg";
import pm from "../assets/pm_preview.avif";
import ecommerce from "../assets/ecommerce_preview.webp";

export const ProjectList = [
  {
    id: 1,
    name: "The Blogs",
    type: "Blog Project",
    image: blog,
    skills: "HTML, SASS, JavaScript, Fetch API",
    github: "https://github.com/Xaphan64/The-Blogs",
    redirect: "N/A",
  },

  {
    id: 2,
    name: "TaskHub",
    type: "Project Management App",
    image: pm,
    skills: "HTML, SASS, JavaScript, Local Storage",
    github: "https://github.com/Xaphan64/Project-Management",
    redirect: "https://project-management-lac.vercel.app/",
  },

  {
    id: 3,
    name: "aStore",
    type: "Ecommerce App",
    image: ecommerce,
    skills: "HTML, SASS, JavaScript, Local Storage, Axios",
    github: "https://github.com/Xaphan64/aStore",
    redirect: "N/A",
  },
];
