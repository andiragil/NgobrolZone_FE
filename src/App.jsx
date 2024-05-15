import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";

import HomePage from "./pages/HomePage";
import RegisPage from "./pages/RegisPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

import store from "./redux/store";

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
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <RouterProvider router={router} />;
      </GoogleOAuthProvider>
    </Provider>

  );
}
export default App;
