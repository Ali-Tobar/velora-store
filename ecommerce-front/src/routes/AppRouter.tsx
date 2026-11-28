import { lazy } from "react";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
// import MainLayout from "@layouts/MainLayout/MainLayout";
const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));
// pages and lazy loading
const Home = lazy(() => import("@pages/Home"));
const Categories = lazy(() => import("@pages/Categories"));
const Products = lazy(() => import("@pages/Products"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Cart = lazy(() => import("@pages/Cart"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
//page Error
import Error from "@pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback="Loading please wait...">
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="Loading please wait...">
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: (
          <Suspense fallback="Loading please wait...">
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "categories",
        element: (
          <Suspense fallback="Loading please wait...">
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <Suspense fallback="Loading please wait...">
            <Wishlist />
          </Suspense>
        ),
      },
      {
        path: "products/:prefix",
        element: (
          <Suspense fallback="Loading please wait...">
            <Products />
          </Suspense>
        ),
        // Only allow letter-only category prefixes in the URL.
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 404,
            });
          }
          return true;
        },
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback="Loading please wait...">
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback="Loading please wait...">
            <Login />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback="Loading please wait...">
            <Register />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  // Show the page that matches the current URL.
  return <RouterProvider router={router} />;
};

export default AppRouter;
