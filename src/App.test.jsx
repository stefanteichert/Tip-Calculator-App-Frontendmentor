import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tip Calculator UI', () => {

  test('calculates tip correctly after user input', () => {
    render(<App />);
    const billInput = screen.getByLabelText(/Bill/i);
    const peopleInput = screen.getByLabelText(/Number of People/i);
    const tipButton = screen.getByText('10%');

    fireEvent.change(billInput, { target: { value: '100' } });
    fireEvent.change(peopleInput, { target: { value: '1' } });
    fireEvent.click(tipButton);

    const tipAmount = screen.getAllByText(/\$10\.00/i);
    const totalAmount = screen.getAllByText(/\$110\.00/i);

    expect(tipAmount.length).toBeGreaterThan(0);
    expect(totalAmount.length).toBeGreaterThan(0);
  });
});

test('shows error message when number of people is zero', () => {
  render(<App />);

  const peopleInput = screen.getByLabelText(/Number of People/i);

  fireEvent.change(peopleInput, { target: { value: '0' } });

  const errorMessage = screen.getByText(/Can't be zero/i);
  expect(errorMessage).toBeInTheDocument();

  expect(peopleInput).toHaveAttribute('aria-invalid', 'true');
});

test('resets the application when reset button is clicked', () => {
  render(<App />);

  const billInput = screen.getByLabelText(/Bill/i);
  const resetButton = screen.getByText(/Reset/i);

  fireEvent.change(billInput, { target: { value: '100' } });

  fireEvent.click(resetButton);

  expect(billInput.value).toBe('');

  const results = screen.getAllByText(/\$0\.00/i);
  expect(results.length).toBeGreaterThan(0);
});