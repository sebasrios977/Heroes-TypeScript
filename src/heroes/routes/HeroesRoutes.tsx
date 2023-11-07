import { Outlet } from "react-router-dom"
import { Navbar } from "../../ui/components"
import PrivateRoute from "./PrivateRoute"

export const HeroesRoutes = () => {

  return (
    <>
        <Navbar />
        <div className="container">
          <PrivateRoute>
            <Outlet />
          </PrivateRoute>
        </div>
    </>
  )
}

