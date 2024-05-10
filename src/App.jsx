import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import RegisPage from "./pages/RegisPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <RegisPage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}
export default App