import { createBrowserRouter } from "react-router";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { LandingPage } from "./pages/LandingPage";
import { Layout } from "./pages/Layout";
import { MovieDetails } from "./pages/MovieDetails";
import { Movies } from "./pages/Movies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
    ],
  },
]);
