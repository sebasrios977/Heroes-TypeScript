import { Navigate, createBrowserRouter } from "react-router-dom";
import { Marvel, Dc, Search, Hero } from "../heroes/pages";
import { Login, Register } from "../auth/pages";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const appRouter = createBrowserRouter([
  {
    path: '/heroes',
    element: <HeroesRoutes />,
    children: [
      {
         path: '/heroes/marvel',
         element: <Marvel />
      },
      {
        path: '/heroes/dc',
        element: <Dc />
      },
      {
        path: '/heroes/search',
        element: <Search />
      },
      {
        path: '/heroes/hero/:id',
        element: <Hero />
      },
      {
        path: '/heroes/*',
        element: <Navigate to='/heroes/marvel' />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthRoutes />,
    children: [
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/auth/register',
        element: <Register />,
      },
      {
        path: '/auth/*',
        element: <Navigate to='/auth/login' />
      }
    ]
  },
  {
    path: '/*',
    element: <Navigate to='/auth/login' />
  }
]);