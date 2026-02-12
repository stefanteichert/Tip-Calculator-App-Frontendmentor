

const TipSelector = ({ tip, tipPercentage, handleTipChange, handleCustomTipChange }) => {
  return (
    <div className="mb-8">
      <span className="text-preset-5 block mb-4 text-grey-500">Select Tip %</span>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {tipPercentage.map((percentage) => (
          <button
            key={percentage}
            type="button"
            onClick={() => handleTipChange(percentage)}
            className={`py-3 rounded-md text-preset-3 transition-colors cursor-pointer focus:outline-3 focus:outline-green-400 ${tip === percentage
              ? 'bg-green-400 text-green-900'
              : 'bg-green-900 text-white hover:bg-green-200 hover:text-green-900'
              }`}
          >
            {percentage}%
          </button>
        ))}
        <input type="number" placeholder="Custom" className="bg-grey-50 text-center p-3 rounded-md text-preset-3 placeholder:text-grey-550 focus:outline-3 focus:outline-green-400" value={tip === 0 || tipPercentage.includes(tip) ? "" : tip} onChange={handleCustomTipChange} inputMode="numeric" />
      </div>
    </div>
  )
}

export default TipSelector