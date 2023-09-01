import RootIndex from "@/page";
import { createBrowserRouter } from "react-router-dom";

const PageRouters = createBrowserRouter([
  {
    path: "/",
    element: <RootIndex />
  }

]);

export default PageRouters;