import { useContext } from 'react';
import { AuthContext } from '../../auth/context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}: any) => {

    const { logged } = useContext(AuthContext);
    const {pathname, search} = useLocation();
    
    const lastPath = pathname + search;
    localStorage.setItem('lastpath', lastPath);

    if(pathname === '/heroes') {
      return (
        <Navigate to='/heroes/marvel' />
      )
    }

  return (logged)
  ? children
  : <Navigate to='/auth/login' />;
}

export default PrivateRoute
