import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/Navbar';


const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en el Navbar', () => {
  
    const initialContext = {
        logged: true,
        name: "Sebas",
        logout: jest.fn(),
    }

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe aparecer el nombre de la persona', () => {
      
        render(
            <MemoryRouter initialEntries={['/heroes/marvel']}>
                <AuthContext.Provider value={initialContext}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getByText(initialContext.name)).toBeTruthy();
    });

    test('Debe de llamar a la funcion logout', () => {
        render(
            <MemoryRouter initialEntries={['/heroes/marvel']}>
                <AuthContext.Provider value={initialContext}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        const btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(initialContext.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/auth/login', {replace: true});


    })
    
    
})
