import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tip Calculator UI', () => {

  test('calculates tip correctly after user input', () => {
    // 1. Arrange: Die App virtuell rendern
    render(<App />);

    // 2. Act: Elemente finden und interagieren
    const billInput = screen.getByLabelText(/Bill/i);
    const peopleInput = screen.getByLabelText(/Number of People/i);
    const tipButton = screen.getByText('10%');

    // Werte eingeben
    fireEvent.change(billInput, { target: { value: '100' } });
    fireEvent.change(peopleInput, { target: { value: '1' } });
    fireEvent.click(tipButton);

    // 3. Assert: Das Ergebnis prüfen
    // Wir suchen nach dem Text, der das Ergebnis anzeigt
    const tipAmount = screen.getAllByText(/\$10\.00/i);
    const totalAmount = screen.getAllByText(/\$110\.00/i);

    expect(tipAmount.length).toBeGreaterThan(0);
    expect(totalAmount.length).toBeGreaterThan(0);
  });
});

test('shows error message when number of people is zero', () => {
  render(<App />);

  const peopleInput = screen.getByLabelText(/Number of People/i);

  // 0 eingeben
  fireEvent.change(peopleInput, { target: { value: '0' } });

  // Prüfen, ob die Fehlermeldung erscheint
  const errorMessage = screen.getByText(/Can't be zero/i);
  expect(errorMessage).toBeInTheDocument();

  // Prüfen, ob das ARIA-Attribut auf dem Input sitzt
  expect(peopleInput).toHaveAttribute('aria-invalid', 'true');
});

test('resets the application when reset button is clicked', () => {
  render(<App />);

  const billInput = screen.getByLabelText(/Bill/i);
  const resetButton = screen.getByText(/Reset/i);

  // 1. Etwas eingeben
  fireEvent.change(billInput, { target: { value: '100' } });

  // 2. Reset klicken
  fireEvent.click(resetButton);

  // 3. Prüfen, ob der Wert im Input wieder leer (oder 0) ist
  expect(billInput.value).toBe(''); // Oder '0', je nachdem was dein Reset macht

  // 4. Prüfen, ob die Anzeige wieder auf Start steht
  const results = screen.getAllByText(/\$0\.00/i);
  expect(results.length).toBeGreaterThan(0);
});