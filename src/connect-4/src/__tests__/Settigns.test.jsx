/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Settings from '../Settings/Settigns.jsx';

beforeEach(() => {
    localStorage.clear();
});

test('renders Settings component', () => {
    render(
        <BrowserRouter>
            <Settings />
        </BrowserRouter>
    );

    expect(screen.getByText('Choose pieces to play with')).toBeInTheDocument();
    expect(screen.getByText('Main Page')).toBeInTheDocument();
});
