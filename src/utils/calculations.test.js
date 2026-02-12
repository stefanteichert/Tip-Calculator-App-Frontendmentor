import { calculateTip, calculateTotal } from './calculations';

describe('Tip Calculator Logic', () => {

  test('calculates correct tip per person (100$ bill, 15% tip, 2 people)', () => {
    const result = calculateTip(100, 15, 2);
    expect(result).toBe(7.50);
  });

  test('calculates correct total per person (100$ bill, 15% tip, 2 people)', () => {
    const result = calculateTotal(100, 15, 2);
    expect(result).toBe(57.50);
  });

  test('returns 0 if number of people is 0', () => {
    const result = calculateTip(100, 15, 0);
    expect(result).toBe(0);
  });
});