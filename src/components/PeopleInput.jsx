import iconPerson from '../assets/images/icon-person.svg'

const PeopleInput = ({ isPeopleError, numberPeople, handleNumberPeopleChange }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label htmlFor="people" className="text-preset-5 block mb-2 text-grey-500">Number of People</label>
        {isPeopleError && (
          <span className="text-orange-400 text-preset-6" id="people-error">Can't be zero</span>
        )}
      </div>
      <div className="relative">
        <img src={iconPerson} alt="" className="absolute left-4 top-1/2 -translate-y-1/2" />
        <input id="people" type="number" className={`bg-grey-50 w-full text-right p-3 rounded-md text-preset-3 text-green-900 focus:outline-3 focus:outline-green-400 ${isPeopleError && "outline-3 outline-orange-400"}`} placeholder="0" min={0} value={numberPeople} onChange={handleNumberPeopleChange} aria-invalid={isPeopleError}
          aria-describedby={isPeopleError ? "people-error" : undefined} inputMode="numeric" />
      </div>
    </div>
  )
}

export default PeopleInput