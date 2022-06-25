import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('renders a mineField', () => {
  render(<App />);
  const linkElement = screen.getByTestId("mine-field")
  expect(linkElement).toBeInTheDocument();
});
test('renders a mine', () => {
  render(<App />);
  const linkElement = screen.getAllByTestId("mine")
  expect(linkElement.length > 0).toBe(true)
});
test('renders a header', () => {
  render(<App />);
  const linkElement = screen.getByTestId("component-header")
  expect(linkElement).toBeInTheDocument()
});

test('1st mine should be clickable', () => {
  render(<App />);
  const linkElement = screen.getAllByTestId("mine")
  fireEvent.click(linkElement[0])
});

