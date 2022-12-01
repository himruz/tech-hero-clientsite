import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Course from "./../../Pages/Course/Course";
import Faq from "./../../Pages/Faq/Faq";
import Blog from "./../../Pages/Blog/Blog";
import Login from "./../../Pages/Login/Login";
import Signup from "./../../Pages/SignUp/Signup";
import CategoryCourse from "../../Pages/CategoryCourse/CategoryCourse";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import EnrollCourse from "../../Pages/EnrollCourse/EnrollCourse";
import PrivateRouter from "./../ProvideRouter/PrivateRouter";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/courses",
        element: <Course />,
        loader: () => fetch(`https://learning-platform-server-sigma.vercel.app/course`),
      },
      { path: "/faq", element: <Faq /> },
      { path: "/blog", element: <Blog /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      {
        path: "/enrollcourse/:id",
        element: (
          <PrivateRouter>
            {" "}
            <EnrollCourse />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://learning-platform-server-sigma.vercel.app/coursedetails/${params.id}`),
      },
      {
        path: "/coursedetails/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`https://learning-platform-server-sigma.vercel.app/coursedetails/${params.id}`),
      },
      {
        path: "/category/:id",
        element: <CategoryCourse />,
        loader: ({ params }) =>
          fetch(`https://learning-platform-server-sigma.vercel.app/category/${params.id}`),
      },
    ],
  },
]);
