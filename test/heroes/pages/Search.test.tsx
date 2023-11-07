import { render, screen } from "@testing-library/react";
import { Search } from '../../../src/heroes/pages/Search';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <Search />', () => {
  

    test('Debe de mostrarse correctamente con valores por defecto', () => {
      
        render(
            <MemoryRouter initialEntries={['/heroes/search?q=batman']}>
                <Search />
            </MemoryRouter>
        );

        screen.debug();
    });
    
})
