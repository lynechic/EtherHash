// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EtherHash title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EtherHash/i);
    expect(titleElement).toBeInTheDocument();
});
