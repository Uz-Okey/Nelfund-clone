import './App.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import ProcurementPage from './Pages/ProcurementPage';
import ImpactPage from './Pages/ImpactPage';
import FaqPage from './Pages/FaqPage';
import PortalPage from './Pages/PortalPage';
import LoginPage from './Pages/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/AboutPage",
    element: <AboutPage/>
  },
  {
    path: "/ProcurementPage",
    element: <ProcurementPage/>
  },
  {
    path: "/ImpactPage",
    element: <ImpactPage/>
  },
  {
    path: "/FaqPage",
    element: <FaqPage/>
  },
    {
      path: "/PortalPage",
      element: <PortalPage/>
    },
    {
      path: "/LoginPage",
      element: <LoginPage/>
    },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


