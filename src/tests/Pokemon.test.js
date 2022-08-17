import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';
import App from '../App';

describe('Testa componente Pokemon', () => {
  test('se a imagem é a correta', () => {
    renderWithRouter(<App />);
    const pokemonPhoto = screen.getByAltText('Pikachu sprite');

    const pikachuArray = pokemons[0].image;

    expect(pokemonPhoto).toHaveAttribute('src', pikachuArray);
  });
  test('se o icone de favorito está na tela', () => {
    renderWithRouter(<App />);

    const pokemonDetails = screen.getByRole('link', { name: /More Details/i });
    expect(pokemonDetails).toBeInTheDocument();
    userEvent.click(pokemonDetails);

    const pokemonFavorites = screen.getByRole('checkbox');
    userEvent.click(pokemonFavorites);

    const pokemonPhoto = screen.getByAltText('Pikachu is marked as favorite');

    const favoriteIcon = '/star-icon.svg';

    expect(pokemonPhoto).toHaveAttribute('src', favoriteIcon);

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent('Electric');
  });
});
