import { useRoutes, Outlet } from "react-router-dom"
import Home from './Pages/Home'

const AppRoutes = () =>(
  useRoutes([
    { path: "/", element: <Home /> },
    // Add path for others component here
  ]))

export default AppRoutes
