import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header component', () => {
  render(<App />);
  const linkElement = screen.getByText(/PublixPassport/i);
  expect(linkElement).toBeInTheDocument();
});
