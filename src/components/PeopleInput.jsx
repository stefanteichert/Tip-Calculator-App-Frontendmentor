import iconPerson from '../assets/images/icon-person.svg'

const PeopleInput = ({ isPeopleError, numberPeople, handleNumberPeopleChange }) => {
  return (
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
  )
}

export default PeopleInput