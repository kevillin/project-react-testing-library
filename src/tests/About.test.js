import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa componente About', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/about');
    const aboutText = screen.getByRole('heading', {
      name: 'About Pokédex',
      level: 2,
    });
    expect(aboutText).toBeInTheDocument();
  });

  test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/about');
    const AltImage = screen.getByAltText('Pokédex');
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(AltImage).toBeDefined();
    expect(AltImage).toHaveAttribute('src', url);
  });
});
