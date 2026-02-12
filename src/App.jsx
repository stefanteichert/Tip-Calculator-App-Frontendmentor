import { useState } from 'react'
import ResultCard from './components/ResultCard';
import BillInput from './components/BillInput';
import TipSelector from './components/TipSelector';
import PeopleInput from './components/PeopleInput';
import { calculateTip, calculateTotal } from './utils/calculations';


function App() {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [numberPeople, setNumberPeople] = useState(1);

  const tipPercentage = [5, 10, 15, 25, 50];

  const tipPerson = calculateTip(bill, tip, numberPeople);
  const totalPerson = calculateTotal(bill, tip, numberPeople);


  const handleBillChange = (e) => {
    setBill(parseFloat(e.target.value) || 0);
  }

  const handleNumberPeopleChange = (e) => {
    setNumberPeople(parseFloat(e.target.value) || 0);
  }

  const handleTipChange = (percentage) => {
    setTip(percentage);
  }

  const handleCustomTipChange = (e) => {
    setTip(parseFloat(e.target.value) || 0)
  }

  const onClickReset = () => {
    setBill('');
    setTip(0);
    setNumberPeople(1);
  }

  const isPeopleError = numberPeople === 0 || numberPeople === "";

  return (
    <div className="bg-grey-200 min-h-screen flex flex-col items-center">
      <header className="mt-12.5 mb-10">
        <h1 className="text-preset-1 tracking-[0.4em] text-grey-600 uppercase">Spli<br />tter</h1>
      </header>
      <main >
        <div className="bg-white p-8 rounded-3xl sm:max-w-180 lg:max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section aria-labelledby="input-heading">
            <h2 id="input-heading" className="sr-only">Tip calculator</h2>
            <BillInput bill={bill} handleBillChange={handleBillChange}></BillInput>
            <TipSelector tip={tip} tipPercentage={tipPercentage} handleTipChange={handleTipChange} handleCustomTipChange={handleCustomTipChange}></TipSelector>
            <PeopleInput isPeopleError={isPeopleError} numberPeople={numberPeople} handleNumberPeopleChange={handleNumberPeopleChange}></PeopleInput>
          </section>
          <ResultCard tipPerson={tipPerson} totalPerson={totalPerson} onClickReset={onClickReset}></ResultCard>
        </div>
      </main >
    </div>
  )
}

export default App
