import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Router,
} from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Error from "./pages/Error";
import PortfolioSingle from "./pages/PortfolioSingle";
import PortfolioLayouts from "./pages/PortfolioLayouts";
import BlogDetails from "./pages/BlogDetails";

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/portfoliosingle" element={<PortfolioSingle />}></Route>
      <Route path="/layouts" element={<PortfolioLayouts />}></Route>
      <Route path="/details/:id" element={<BlogDetails />}></Route>
      </Route>
      
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
