import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa requisito NotFound', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/erro');
    const ErrorLink = screen.getByRole('heading', { level: 2, name: /not found/i });
    expect(ErrorLink).toBeInTheDocument();

    const image = screen.getByAltText(/Pikachu crying because the/i);
    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(image).toHaveAttribute('src', url);
  });
});
