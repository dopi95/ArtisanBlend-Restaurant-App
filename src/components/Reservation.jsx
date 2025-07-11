import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function Reservation() {
  return(
    <main className="px-5 flex flex-col items-center">
      <h1 className="text-center text-slate-950 font-bold text-4xl my-4">Make a reservation</h1>
      <section className="border rounded-tr-[50px] rounded-bl-[50px] border-gold border-solid w-2/3 py-4 px-6">
        <form className="flex flex-col">
          <div className="flex gap-4 ">
            <div className="flex-1">
              <label htmlFor="firstName" className="text-gray-950 text-xl font-semibold block">First Name:</label>
              <input 
                type="text" 
                id="firstName" 
                placeholder="First Name" 
                className="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border border-solid border-gold" 
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="secondName" className="text-gray-950 text-xl font-semibold block">Second Name:</label>
              <input 
                type="text" 
                id="secondName" 
                placeholder="Second Name" 
                className="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border border-solid border-gold" 
                required
            />
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="flex-1">
              <label htmlFor="email" className="text-gray-950 text-xl font-semibold block">E-mail:</label>
              <input 
                type="email" 
                id="email" 
                placeholder="E-mail" 
                className="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border border-solid border-gold" 
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="tel" className="text-gray-950 text-xl font-semibold block">Phone Number:</label>
              <input 
                type="tel" 
                id="tel" 
                placeholder="Phone Number" 
                className="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border border-solid border-gold" 
                required
            />
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="w-max">
              <label htmlFor="guests" className="text-gray-950 text-xl font-semibold block">Number of Guests:</label>
              <select 
                type="email" 
                id="email" 
                className="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border border-solid border-gold" 
                required
              >
                {[...Array(20)].map((_, i)=>(
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="notes" className="text-gray-950 text-xl font-semibold block">Notes(allergies,specific seats, duration, ocassion):</label>
              <input 
                type="text" 
                id="notes" 
                placeholder="Any Special Treatment" 
                className="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border border-solid border-gold" 
            />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="reservationDate" className="text-gray-950 text-xl font-semibold block">Reservation Date:</label>
              <DatePicker
                id="reservationDate"
                // selected={selectedDate}
                dateFormat="MM/dd/yyyy"
                placeholderText="Select Reservation Date"
                required
                className="outline-none w-[25.5rem] rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border border-solid border-gold cursor-pointer"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="reservationTime" className="text-gray-950 text-xl font-semibold block">Reservation Time:</label>
              <DatePicker
                id="reservationTime"
                // selected={selectedTime}
                showTimeSelect
                showTimeSelectOnly
                dateFormat="h:mm aa"
                timeCaption="Time"
                timeIntervals={15}
                placeholderText="Select Reservation Time"
                required
                className="outline-none w-[25.5rem] rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border border-solid border-gold cursor-pointer"
              />
            </div>
          </div>
          <div className="grid place-content-center w-full">
            <button type="submit" className="px-4 py-2 bg-darkgold hover:bg-opacity-90 text-white font-bold rounded-lg">Book</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Reservation