import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../../src/auth/context';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../../../src/heroes/routes/PrivateRoute';

describe('Pruebas en el PublicRoute', () => {
  
    const contextValue = {
        logged: true,
        name: 'Sebas',
        login: jest.fn(),
        logout: jest.fn(),
    }

    test('Si esta autenticado, debe de mostrar el children', () => {
    
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>  
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText('Ruta Privada')).toBeTruthy();
    });
  
    test('Si esta autenticado, debe de navegar si esta autenticado', () => {
      
        render(
            <MemoryRouter initialEntries={['/heroes/marvel']}>
                <Routes>
                    <Route path='/auth/login' element={ <h1>Pagina Login</h1> } />    
                    <Route path='/heroes/marvel' element={ <h1>Pagina Marvel</h1> } />    
                </Routes>

                <AuthContext.Provider value={contextValue}>
                    <PrivateRoute />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getByText('Pagina Marvel')).toBeTruthy();
    });

    test('Debe de llamar al storage', () => {

        Storage.prototype.setItem = jest.fn();

        render(
            <MemoryRouter initialEntries={['/heroes/dc']}>
                <AuthContext.Provider value={contextValue}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>  
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(localStorage.setItem).toHaveBeenCalledWith("lastpath", "/heroes/dc");


    });
    
    
});