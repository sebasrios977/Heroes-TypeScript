import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const Login = () => {

  const {login} = useContext(AuthContext);

  const navigate = useNavigate();
  const onLogin = () => {
    const lastPath: string = localStorage.getItem('lastpath') || '/heroes/marvel';
    login('Sebastian Rios');
    navigate(lastPath, {
      replace: true,
    });
  }
  return (
    <div className="container mt-5">
      <h1 className='text-primary'>Login</h1>
      <hr />

      <button onClick={onLogin} className="btn btn-primary">Login</button>
    </div>
  )
}

