import { useContext } from 'react';
import { AuthContext } from '../../auth/context';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({children}: any) => {

    const { logged } = useContext(AuthContext);
    const {pathname} = useLocation();
    
    if(pathname === '/auth') {
      return (
        <Navigate to='/auth/login' />
      )
    }
  return (logged)
  ? <Navigate to='/heroes/marvel' />
  : children;
}

export default PublicRoute
