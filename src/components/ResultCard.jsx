

const ResultCard = ({ tipPerson, totalPerson, onClickReset }) => {
  return (
    <section className="bg-green-900 p-10 rounded-2xl flex flex-col justify-between" aria-labelledby="result-heading">
      <h2 id="result-heading" className="sr-only">Calculation Results</h2>

      <div className="space-y-10">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white text-preset-5">Tip Amount</p>
            <p className="text-grey-400 text-preset-6">/ person</p>
          </div>
          <p className="text-preset-2 text-green-400">${(tipPerson || 0).toFixed(2)}</p>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-white text-preset-5">Total</p>
            <p className="text-grey-400 text-preset-6">/ person</p>
          </div>
          <p className="text-preset-2 text-green-400">${totalPerson.toFixed(2)}</p>
        </div>
      </div>

      <button type="button"
        className={`bg-green-400 text-green-900 w-full py-3 rounded-md text-preset-4 uppercase mt-8   ${tipPerson === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-green-200 cursor-pointer'}`} disabled={tipPerson === 0 && totalPerson === 0} onClick={onClickReset}>
        Reset
      </button>
    </section>
  )
}

export default ResultCard