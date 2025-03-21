import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import Calculator from './Calculator/Calculator';

test('renders Main App Component', () => {
  render(<App />);
});
test('renders Main Calculate Component', () => {
  render(<Calculator />);
  const linkHeader = screen.getByText("String Calculator")
  expect(linkHeader).toBeInTheDocument();

  const linkLabel = screen.getByText('Enter numbers')
  expect(linkLabel).toBeInTheDocument();

  const buttonEl = screen.getByText("Calculate");
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent("Calculate");
});