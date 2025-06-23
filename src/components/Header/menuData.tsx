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
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Home",
        path: "/services/house",
        newTab: false,
      
      },
      {
        id: 22,
        title: "Housing Societies",
        path: "/services/housing_societies",
        newTab: false,
 
      },
      {
        id: 23,
        title: "Commercial",
        path: "/services/commercial",
        newTab: false,
    
      },
    ],
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
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "Certifications",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "Jobs",
        path: "/",
        newTab: false,
      },
    ],
  },
];
export default menuData;
