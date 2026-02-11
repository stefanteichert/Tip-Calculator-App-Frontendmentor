import iconDollar from './assets/images/icon-dollar.svg'
import iconPerson from './assets/images/icon-person.svg'
import { useState } from 'react'


function App() {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [numberPeople, setNumberPeople] = useState(1);

  const tipPercentage = [5, 10, 15, 25, 50];

  const tipPerson = numberPeople > 0 ? (bill / numberPeople) * (tip / 100) : 0;
  const totalPerson = numberPeople > 0 ? (bill / numberPeople) + tipPerson : 0;

  const handleBillChange = (e) => {
    setBill(parseFloat(e.target.value) || 0);
  }

  const handleNumberPeopleChange = (e) => {
    setNumberPeople(parseFloat(e.target.value) || 0);
  }

  const handleCustomTipChange = (e) => {
    setTip(parseFloat(e.target.value) || 0)
  }

  const onClickReset = () => {
    setBill("");
    setNumberPeople("");
    setTip(1);
  }

  const isPeopleError = numberPeople === 0 || numberPeople === "";

  return (
    <div className="bg-grey-200 min-h-screen flex flex-col items-center">
      <header className="mt-12.5 mb-10">
        <h1 className="text-preset-1 tracking-[0.4em] text-grey-600 uppercase">Spli<br />tter</h1>
      </header>
      <main >
        <div className="bg-white p-8 rounded-3xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">

          <section aria-labelledby="input-heading">
            <h2 id="input-heading" className="sr-only">Tip calculator</h2>


            <div className="mb-8">
              <label htmlFor="bill" className="text-preset-5 block mb-2 text-grey-500">Bill</label>
              <div className="relative">
                <img src={iconDollar} alt="" className="absolute left-4 top-1/2 -translate-y-1/2" />
                <input id="bill" type="number" className="bg-grey-50 w-full text-right px-4 py-2 rounded-md text-preset-3 text-green-900 focus:outline-2 focus:outline-green-400" placeholder="0" min={0} value={bill} onChange={handleBillChange} />
              </div>
            </div>
            <div className="mb-8">
              <span className="text-preset-5 block mb-4 text-grey-500">Select Tip %</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tipPercentage.map((percentage) => (
                  <button
                    key={percentage}
                    type="button"
                    onClick={() => setTip(percentage)}
                    className={`py-3 rounded-md text-preset-3 transition-colors cursor-pointer ${tip === percentage
                      ? 'bg-green-400 text-green-900'
                      : 'bg-green-900 text-white hover:bg-green-200 hover:text-green-900'
                      }`}
                  >
                    {percentage}%
                  </button>
                ))}
                <input type="number" placeholder="Custom" className="bg-grey-50 text-center p-3 rounded-md text-preset-3 placeholder:text-grey-550" onChange={handleCustomTipChange} />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="people" className="text-preset-5 block mb-2 text-grey-500">Number of People</label>
                {isPeopleError && (
                  <span className="text-orange-400 text-preset-6">Can't be zero</span>
                )}
              </div>
              <div className="relative">
                <img src={iconPerson} alt="" className="absolute left-4 top-1/2 -translate-y-1/2" />
                <input id="people" type="number" className={`bg-grey-50 w-full text-right p-3 rounded-md text-preset-3 text-green-900 ${isPeopleError && "outline-2 outline-orange-400"}`} placeholder="0" min={0} value={numberPeople} onChange={handleNumberPeopleChange} />
              </div>
            </div>
          </section>


          <section className="bg-green-900 p-10 rounded-2xl flex flex-col justify-between" aria-labelledby="result-heading">
            <h2 id="result-heading" className="sr-only">Calculation Results</h2>

            <div className="space-y-10">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white text-preset-5">Tip Amount</p>
                  <p className="text-grey-400 text-preset-6">/ person</p>
                </div>
                <p className="text-preset-2 text-green-400">${tipPerson.toFixed(2)}</p>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white text-preset-5">Total</p>
                  <p className="text-grey-400 text-preset-6">/ person</p>
                </div>
                <p className="text-preset-2 text-green-400">${totalPerson.toFixed(2)}</p>
              </div>
            </div>

            <button type="button" className="bg-green-400 text-green-900 w-full py-3 rounded-md text-preset-4 uppercase mt-8 cursor-pointer hover:bg-green-200" onClick={onClickReset}>
              Reset
            </button>
          </section>
        </div>
      </main >
    </div>
  )
}

export default App
