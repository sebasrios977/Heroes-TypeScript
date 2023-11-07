import { Outlet } from "react-router-dom"
import PublicRoute from "./PublicRoute"

export const AuthRoutes = () => {
  return (
    <PublicRoute>
      <Outlet />
    </PublicRoute>
  )
}

