import iconDollar from '../assets/images/icon-dollar.svg'

const BillInput = ({ bill, handleBillChange }) => {
  return (
    <div className="mb-8">
      <label htmlFor="bill" className="text-preset-5 block mb-2 text-grey-500">Bill</label>
      <div className="relative">
        <img src={iconDollar} alt="" className="absolute left-4 top-1/2 -translate-y-1/2" />
        <input id="bill" type="number" className="bg-grey-50 w-full text-right px-4 py-2 rounded-md text-preset-3 text-green-900 focus:outline-3 focus:outline-green-400" placeholder="0" min={0} value={bill} onChange={handleBillChange} inputMode="numeric" />
      </div>
    </div>
  )
}

export default BillInput