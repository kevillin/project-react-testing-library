import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa componente Favorite Pokemons', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorites');
    const favoriteNotFound = screen.getByText('No favorite pokemon found');
    expect(favoriteNotFound).toBeInTheDocument();
  });
});
