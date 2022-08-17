import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const test = 'pokemon-name';

describe('Testa Pokedex', () => {
  test('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const EncounteredText = screen.getByRole('heading', {
      level: 2, name: /Encountered pokémons/i,
    });
    expect(EncounteredText).toBeInTheDocument();
  });

  test('Teste se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByTestId(test);
    expect(pokemonName).toBeInTheDocument();
  });

  test('Teste se o próximo pokemon é mostrado', () => {
    renderWithRouter(<App />);

    const proximoPokemon = screen.getByTestId('next-pokemon');
    userEvent.click(proximoPokemon);

    const pokemonName = screen.getByTestId(test);
    expect(pokemonName).toHaveTextContent('Charmander');
  });

  test('Teste se os botões são mostrados, exceto o All', () => {
    renderWithRouter(<App />);

    const todosBotoes = screen.getAllByTestId('pokemon-type-button');
    const botoes = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    todosBotoes.forEach((button, index) => {
      expect(button).toHaveTextContent(botoes[index]);
    });
  });

  test('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', { name: 'All' });
    userEvent.click(buttonAll);

    const pikachuName = screen.getByTestId('pokemon-name');
    expect(pikachuName).toHaveTextContent('Pikachu');
  });
});
