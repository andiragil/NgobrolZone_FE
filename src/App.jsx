import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Protected from "./components/Protected";
import HomePage from "./pages/HomePage";
import RegisPage from "./pages/RegisPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

import store from "./redux/store";
import NonProtected from "./components/NonProtected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Protected>
          <Navbar />
          <HomePage />
        </Protected>
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <NonProtected>
          <Navbar />
          <RegisPage />
        </NonProtected>
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Protected>
          <Navbar />
          <ProfilePage />
        </Protected>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <NonProtected>
          <Navbar />
          <LoginPage />
        </NonProtected>
      </>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <RouterProvider router={router} />;

        <ToastContainer theme="colored" />
      </GoogleOAuthProvider>
    </Provider>

  );
}
export default App;
