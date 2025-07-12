import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
function Reservation() {

  // declare inpuut states
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("")
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [numGuests, setNumGuests] = useState(1);

  // declare error states
  const [firstNameError, setFirstNameError] = useState("");
  const [secondNameError, setSecondNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");

  // state for submission feedback
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // UseEffect to cler submission message after a delay
  useEffect(()=> {
    let timer; // to het the id so we can clean up the effevt later
    if (isSubmitted && submissionMessage) {
    // if the form was successfully submitted and there's a message run
      setTimeout(() => {
        setSubmissionMessage(''); // Clear the message
        setIsSubmitted(false);    // Reset submission status
      }, 5000); // Clear after 5 seconds (5000 milliseconds)
    }
  }, [isSubmitted, submissionMessage]); // dependenciews to command when use effect should happen


  // declare a variable to store char count of the notes input
  const maxNotesCharacters = 50;

  // form validation for specific inputs
  // form validation logic
  const validateForm = ()=>{ // returns a bollean
    let isValid = true;

    // name validation , name not null
    if (!firstName.trim()){
      setFirstNameError("Name is required");
      isValid = false;
    }else{
      setFirstNameError("");
    }

    // name validation , name not null
    if (!secondName.trim()){
      setSecondNameError("Name is required");
      isValid = false;
    }else{
      setSecondNameError("");
    }

    // email validation, not null and using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()){
      setEmailError("E-mail is required");
      isValid = false;
    }else{
      setEmailError("");
    }
    // phone validation, not null and using regex
    const phoneRegex = /^\+?(\d[\s.-]?){7,15}$/;
    if (!phone.trim()){
      setPhoneError("Phone is required");
      isValid = false;
    }else{
      setPhoneError("");
    }

    // date validation
    if (!selectedDate){
      setDateError("Please select a date!");
      isValid = false;
    }else{
      setDateError("")
    }

    // date validation
    if (!selectedTime){
      setTimeError("Please select a date!");
      isValid = false;
    }else{
      setTimeError("");
    }



    // return if form is valid or not
    return isValid
  }

  const navigate = useNavigate();
  // implement form submission logic
  const handleSubmit = (e)=>{
    e.preventDefault();  // prevent default form submission behavious like reloading ...
    setSubmissionMessage(""); //clear submission message if any
    setIsSubmitted(false);

    if(validateForm()){
      //construct or make a reservation object, a new one
      const newReservation = {
        id: Date.now(), // simple id cz it returns millisecends as a number so we good
        firstName,
        secondName,
        email,
        phone,
        notes,
        date: selectedDate ? selectedDate.toISOString() : null,
        time: selectedTime ? selectedTime.toTimeString().slice(0, 5) : null,
        sumbmittedAt: new Date().toISOString(),
      };

      // get existing reservation if any from local storage and change them to objects
      const existingReservationString = localStorage.getItem("reservations");
      const existingReservation = existingReservationString ? JSON.parse(existingReservationString) : [];

      // add new reservation to the array
      const updatedReservations = [...existingReservation, newReservation];

      // save the updated reservations to local storage
      localStorage.setItem("reservations", JSON.stringify(updatedReservations));

      // set sucess message
      setSubmissionMessage("Your Place Booked, Thank you!")
      setIsSubmitted(true);

      // reset the fields
      setFirstName("");
      setSecondName("");
      setEmail("");
      setPhone("");
      setNotes("");
      setSelectedDate(null);
      setSelectedTime(null);
      setNumGuests(1);

      //clear all errors
      setFirstNameError("");
      setEmailError("");
      setSecondNameError("")
      setPhoneError("");
      setDateError("");
      setTimeError("");

      // go to resrvation-suceeded when clicked, here navigate is a maps function
      // still studying this, return here
      navigate('/reservation-success', { state: { newReservation } });
    }else{
      setSubmissionMessage("Please Correct errors in the Form!");
      setIsSubmitted(false);
    }
  }


  return(
    <main className="px-5 py-3 md:py-0 flex flex-col items-center justify-center min-h-screen mt-16 md:mt-0">
      <h1 className="text-center text-slate-950 dark:text-white font-bold text-4xl my-4">Make a reservation</h1>
      <section className="border rounded-tr-[50px] rounded-bl-[50px] border-gold border-solid md:w-2/3 w-full py-4 md:px-6 px-2">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex md:flex-row flex-col gap-4 ">
            <div className="flex-1">
              <label htmlFor="firstName" className="text-gray-950 dark:text-white text-xl font-semibold block">First Name:</label>
              <input 
                type="text" 
                id="firstName" 
                placeholder="John" 
                className="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border border-solid border-gold" 
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                required
              />
              {firstNameError && <p className="text-xl font-bold text-orange-700">{firstNameError}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="secondName" className="text-gray-950 dark:text-white text-xl font-semibold block">Second Name:</label>
              <input 
                type="text" 
                id="secondName" 
                placeholder="Doe" 
                className="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border border-solid border-gold" 
                value={secondName}
                onChange={(e)=>setSecondName(e.target.value)}
                required
              />
              {secondNameError && <p className="text-xl font-bold text-orange-700">{secondNameError}</p>}
            </div>
          </div>
          <div className="flex gap-4 md:flex-row flex-col">
            <div className="flex-1">
              <label htmlFor="email" className="text-gray-950 dark:text-white text-xl font-semibold block">E-mail:</label>
              <input 
                type="email" 
                id="email" 
                placeholder="johndoe@gmail.com" 
                className="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border border-solid border-gold" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
              {emailError && <p className="text-xl font-bold text-orange-700">{emailError}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="tel" className="text-gray-950 dark:text-white text-xl font-semibold block">Phone Number:</label>
              <input 
                type="tel" 
                id="tel" 
                placeholder="+117-4536-5367" 
                className="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border border-solid border-gold" 
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                required
              />
              {phoneError && <p className="text-xl font-bold text-orange-700">{phoneError}</p>}
            </div>
          </div>
          <div className="flex gap-4 md:flex-row flex-col">
            <div className="w-max">
              <label htmlFor="guests" className="text-gray-950 dark:text-white text-xl font-semibold block">Number of Guests:</label>
              <select 
                id="guests" 
                className="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border border-solid border-gold" 
                value={numGuests}
                onChange={(e)=>setNumGuests(parseInt(e.target.value))}
                required
              >
                {[...Array(20)].map((_, i)=>(
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-1">
                <label htmlFor="notes" className="text-gray-950 dark:text-white text-xl font-semibold block">Notes(allergies,specific seats, duration, ocassion):</label>
                <input 
                  type="text" 
                  id="notes" 
                  placeholder="Any Special Treatment" 
                  className="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border border-solid border-gold" 
                  value={notes}
                  onChange={(e)=>setNotes(e.target.value)}
                />
              </div>
              <p className="border border-gold border-solid px-2 py-2 rounded-lg md:mt-4 mt-12">{notes.length}/{maxNotesCharacters}</p>
            </div>
          </div>
          <div className="flex gap-4 md:flex-row flex-col">
            <div className="flex-1">
              <label htmlFor="reservationDate" className="text-gray-950 dark:text-white text-xl font-semibold block">Reservation Date:</label>
              <DatePicker
                id="reservationDate"
                // selected={selectedDate}
                dateFormat="MM/dd/yyyy"
                placeholderText="Select Reservation Date"
                required
                className="outline-none md:w-[25.5rem] w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border border-solid border-gold cursor-pointer"
                selected={selectedDate}
                onChange={(date)=> setSelectedDate(date)}
              />
              {dateError && <p className="text-xl font-bold text-orange-700">{dateError}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="reservationTime" className="text-gray-950 dark:text-white text-xl font-semibold block">Reservation Time:</label>
              <DatePicker
                id="reservationTime"
                selected={selectedTime}
                onChange={(date)=> setSelectedTime(date)}
                showTimeSelect
                showTimeSelectOnly
                dateFormat="h:mm aa"
                timeCaption="Time"
                timeIntervals={15}
                placeholderText="Select Reservation Time"
                required
                className="outline-none md:w-[25.5rem] w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border border-solid border-gold cursor-pointer"
              />
              {timeError && <p className="text-xl font-bold text-orange-700">{timeError}</p>}
            </div>
          </div>
          <div className="grid place-content-center w-full">
            <button type="submit" className="px-4 py-2 bg-gold hover:bg-opacity-90 text-white font-bold rounded-lg">Book</button>
          </div>
        </form>
        {submissionMessage && <p className="text-xl text-green-500 font-bold">{submissionMessage}</p>}
      </section>
    </main>
  )
}

export default Reservation