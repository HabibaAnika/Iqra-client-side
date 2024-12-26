import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import OurTeachers from "../pages/about/OurTeachers";
import Rules from "../pages/about/Rules";
import BasicQuran from "../pages/courses/BasicQuran";
import Nazera from "../pages/courses/Nazera";
import Hifz from "../pages/courses/Hifz";
import Alim from "../pages/courses/Alim";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Need from "../pages/courses/Need";
import AmparaHifz from "../pages/courses/AmparaHifz";
import SpecialHifz from "../pages/courses/SpecialHifz";
import Revise from "../pages/courses/Revise";
import BasicDetails from "../pages/details/BasicDetails";
import AdvanceDetails from "../pages/details/AdvanceDetails";
import SpecialDetails from "../pages/details/SpecialDetails";
import HifzDetails from "../pages/details/HifzDetails";
import NeedDetails from "../pages/details/NeedDetails";
import AlimDetails from "../pages/details/AlimDetails";
import ReviseDetails from "../pages/details/ReviseDetails";
import AmparaDetails from "../pages/details/AmparaDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
          path: "/teachers",
          element: <OurTeachers/>
        },
        {
          path: "/rules",
          element: <Rules/>
        },
        {
          path: "/basic",
          element: <BasicQuran/>
        },
        {
          path: "/nazera",
          element: <Nazera/>
        },
        {
          path: "/hifz",
          element: <Hifz/>
        },
        {
          path: "/30th",
          element: <AmparaHifz/>
        },
        {
          path: "/specialHifz",
          element: <SpecialHifz/>
        },
        {
          path: "/revise",
          element: <Revise/>
        },
        {
          path: "/need",
          element: <Need/>
        },
        {
          path: "/alim",
          element: <Alim/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/blog",
          element: <Blog/>
        },

        // course details
        {
          path: "/basicD",
          element: <BasicDetails/>
        },
        {
          path: "/advanceD",
          element: <AdvanceDetails/>
        },
        {
          path: "/amparaD",
          element: <AmparaDetails/>
        },
        {
          path: "/specialD",
          element: <SpecialDetails/>
        },
        {
          path: "/hifzD",
          element: <HifzDetails/>
        },
        {
          path: "/reviseD",
          element: <ReviseDetails/>
        },
        {
          path: "/needD",
          element: <NeedDetails/>
        },
        {
          path: "/alimD",
          element: <AlimDetails/>
        }

    ]
  },
]);
