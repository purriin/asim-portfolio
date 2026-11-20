import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App without crashing and displays header and hero', () => {
  render(<App />);
  const nameElement = screen.getByRole('heading', { level: 1, name: /asim/i });
  expect(nameElement).toBeInTheDocument();
});
