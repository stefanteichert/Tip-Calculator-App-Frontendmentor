export const calculateTip = (bill, tipPercentage, numberPeople) => {
  if (numberPeople <= 0 || !bill) return 0;
  return (bill * (tipPercentage / 100)) / numberPeople;
};

export const calculateTotal = (bill, tipPercentage, numberPeople) => {
  if (numberPeople <= 0 || !bill) return 0;
  const tipPerPerson = calculateTip(bill, tipPercentage, numberPeople);
  return (bill / numberPeople) + tipPerPerson;
};