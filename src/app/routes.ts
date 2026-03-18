import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { Artists } from "./pages/Artists";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Root } from "./pages/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "gallery", Component: Gallery },
      { path: "artists", Component: Artists },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
    ],
  },
]);