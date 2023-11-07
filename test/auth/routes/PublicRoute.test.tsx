import { render, screen } from '@testing-library/react';
import PublicRoute from '../../../src/auth/routes/PublicRoute';
import { AuthContext } from '../../../src/auth/context';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en el PublicRoute', () => {
  
    test('Si no esta autenticado, debe de mostrar el children ', () => {
      
        const contextValue = {
            logged: false,
            login: jest.fn(),
            logout: jest.fn(),
        }
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <PublicRoute>
                        <h1>Ruta Publica</h1>
                    </PublicRoute>  
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText('Ruta Publica')).toBeTruthy();
    });
  
    test('Si esta autenticado, debe de navegar si esta autenticado', () => {
      
        const contextValue = {
            logged: true,
            name: 'Sebas',
            login: jest.fn(),
            logout: jest.fn(),
        }
        render(
            <MemoryRouter initialEntries={['/auth/login']}>
                <Routes>
                    <Route path='/auth/login' element={ <h1>Pagina Login</h1> } />    
                    <Route path='/heroes/marvel' element={ <h1>Pagina Marvel</h1> } />    
                </Routes>

                <AuthContext.Provider value={contextValue}>
                    <PublicRoute />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getByText('Pagina Marvel')).toBeTruthy();
    });
    
});
