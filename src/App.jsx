import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisPage from "./pages/RegisPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HomePage />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Navbar />
        <RegisPage />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Navbar />
        <ProfilePage />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <LoginPage />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
