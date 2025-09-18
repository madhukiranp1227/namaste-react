import React from "react";
import ReactDOM from "react-dom/client";
import "/index.css";
import { Header } from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";

// v7: pull router primitives from "react-router"
import { createBrowserRouter, RouterProvider } from "react-router";

const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
);

const appRouter = createBrowserRouter([
    { path: "/", element: <AppLayout />, errorElement: <Error /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={appRouter} />
);
