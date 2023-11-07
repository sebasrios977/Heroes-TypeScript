import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer";
import { types } from "../types/types";


const init = () => {
  const storage = localStorage.getItem('user');
  const user = storage ? JSON.parse(storage) : '';

  return {
    logged: !!user,
    name: user.name,
  }
}

const AuthProvider = ({children}: any) => {


    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (name: string = '') => {
      const user = {name: name};
      const action = {
        type: types.login,
        payload: {
          name: name,
        }
      }
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(action);
    }

    const logout = () => {
      localStorage.removeItem('user');
      const action = {
        type: types.logout,
      }
      dispatch(action);
    }

  return (
    <AuthContext.Provider value={{...authState, authState, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
