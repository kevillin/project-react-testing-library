import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testa componente app', () => {
  test('se os componentes aparecem na página', () => {
    renderWithRouter(<App />);
    const HomeTitle = screen.getByRole('link', {
      name: 'Home',
    });

    expect(HomeTitle).toBeDefined();

    const AboutTitle = screen.getByRole('link', {
      name: 'About',
    });

    expect(AboutTitle).toBeDefined();

    const FavoritetTitle = screen.getByRole('link', {
      name: 'Favorite Pokémons',
    });

    expect(FavoritetTitle).toBeDefined();
  });

  test('Se os componentes são direcionados para a página Home', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/');

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
    userEvent.click(homeLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('Se os componentes são direcionados para a página About', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/about');

    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('Se os componentes são direcionados para a página Pokémons Favoritados', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/favorites');

    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(favoriteLink).toBeInTheDocument();
    userEvent.click(favoriteLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('Se os componentes são direcionados para a página de erro', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/errado');

    const ErrorLink = screen.getByRole('heading', { level: 2, name: /not found/i });
    expect(ErrorLink).toBeInTheDocument();
  });
});
