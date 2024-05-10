import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisPage from "./pages/RegisPage";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/register",
        element: <RegisPage />,
    },
    {
        path: "/profile",
        element: <ProfilePage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}
export default App;
