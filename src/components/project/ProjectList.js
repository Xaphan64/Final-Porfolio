import blog from "../assets/blog.jpg";
import pm from "../assets/pm.avif";
import ecommerce from "../assets/ecommerce.webp";
import rental from "../assets/rental.webp";

export const ProjectList = [
  {
    id: 1,
    name: "The Blogs",
    type: "Blog Project",
    image: blog,
    skills: "HTML, SASS, JavaScript, Fetch API",
    github: "https://github.com/Xaphan64/The-Blogs",
    redirect: "https://the-blogs.vercel.app/",
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
    redirect: "https://a-store-six.vercel.app/",
  },
  {
    id: 4,
    name: "DriveEase",
    type: "Rental App",
    image: rental,
    skills: "HTML, Styled Components, Typescript",
    github: "https://github.com/Xaphan64/DriveEase",
    redirect: "https://drive-ease-one.vercel.app/",
  },
];
