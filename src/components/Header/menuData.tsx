import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Our Services",
    path: "#services",
    newTab: false,
  },
  
  {
    id: 3,
    title: "Projects",
    path: "/project",
    newTab: false,
  },
  {
    id: 4,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Brochures",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Certifications",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Jobs",
        path: "/blog",
        newTab: false,
      },
    ],
  },
];
export default menuData;
