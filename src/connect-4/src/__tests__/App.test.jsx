/**
 * @jest-environment jsdom
 */
// src/App.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {BrowserRouter, Router, RouterProvider} from 'react-router-dom';
import App from '../App.jsx';

test('renders App component without crashing', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
});

test('displays "Connect 4" title', () => {
    const { getByText } = render(<BrowserRouter><App /></BrowserRouter>);
    const titleElement = getByText(/Connect 4/i);
    expect(titleElement).toBeInTheDocument();
});

test('displays "Settings" button', () => {
    const { getByText } = render(<BrowserRouter><App /></BrowserRouter>);
    const settingsButton = getByText(/Settings/i);
    expect(settingsButton).toBeInTheDocument();
});

