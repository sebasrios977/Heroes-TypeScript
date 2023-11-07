import { authReducer } from '../../../src/auth/context/AuthReducer';
import { types } from '../../../src/auth/types/types';

describe('Pruebas en el authReducer', () => {
  
    const initialState = {
        logged: false,
    }

    test('Debe de retornar el estado por defecto', () => {
      const state = authReducer(initialState, {});
      expect(state).toEqual({ logged: false });
    });

    test('Debe de (login) llamar el login autenticar y establecer el usuario', () => {
      const state = authReducer(initialState, {type: types.login, payload: {name: 'Sebas'}})
        expect(state).toEqual({ logged: true, name: 'Sebas' });
    });

    test('Debe de (logout) borrar el name del usuario y logged en false', () => {
        const state = authReducer({logged: true, name: 'Sebastian'}, {type: types.logout});
        expect(state).toEqual({ logged: false });

    });
    
    
})
