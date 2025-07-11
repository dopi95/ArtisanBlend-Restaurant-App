import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ReservationData() {
  const location = useLocation();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    // attempt to get reservation data from location.state (passed during navigation), i'll deep learn this too cz
    // even though i found a away i don't merit it
    if (location.state && location.state.newReservation) {
      setReservation(location.state.newReservation);
    }else{
      console.log("we got problems importing data")
    }
  }, [location.state]); // Dependency array: re-run if location.state changes

  // display loading/no data message if reservation object is not yet booked
  if (!reservation) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-gray-700">No reservation data to display. Please make a reservation first.</p>
      </div>
    );
  }

  // Generate a simple, consistent reservation ID.
  // As per your screenshot, it's a fixed string "12345678".
  const reservationId = reservation.id ? reservation.id.toString().slice(0, 8) : 'N/A';;

  // Dummy values for Duration and Note, as they were fixed in your screenshot
  const duration = "2 Hours";
  // The note in your screenshot was "Allergy", but your form input is dynamic.
  // We'll use the dynamic `reservation.notes` if available, otherwise default.
  const noteDisplay = (reservation.notes && reservation.notes.trim() !== '') ? reservation.notes : 'None';


  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 relative overflow-hidden">
      <div className="absolute top-1/4 -left-16 w-32 h-32 bg-gold rounded-full opacity-30 blur-2xl transform rotate-45"></div>
      <div className="absolute bottom-1/4 -right-16 w-32 h-32 bg-gold rounded-full opacity-30 blur-2xl transform -rotate-45"></div>

      <h1 className="text-center text-slate-950 font-bold text-3xl md:text-4xl my-6">View your E-booking below!</h1>

      <section className="bg-white border-2 border-gold rounded-xl shadow-xl p-6 md:p-10 w-full max-w-lg text-center flex flex-col items-center">
        {/* the check mark icon*/}
        <div className="mb-6">
          <svg className="w-24 h-24 text-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Successfully Reserved Your Table!</h2>
        <p className="text-lg md:text-xl font-semibold text-gray-600 mb-8">Reservation ID: {reservationId}</p>

        {/* reservation datas grid */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-left w-full max-w-sm mb-10">
          {/* name */}
          <div className="col-span-1">
            <p className="text-gray-500 font-medium text-lg">Name</p>
            <p className="text-gray-800 font-semibold text-xl">{reservation.firstName} {reservation.secondName}</p>
          </div>
          {/* date */}
          <div className="col-span-1">
            <p className="text-gray-500 font-medium text-lg">Date</p>
            <p className="text-gray-800 font-semibold text-xl">
              {reservation.date ? new Date(reservation.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : 'N/A'}
            </p>
          </div>
          {/* time */}
          <div className="col-span-1">
            <p className="text-gray-500 font-medium text-lg">Time</p>
            <p className="text-gray-800 font-semibold text-xl">{reservation.time || 'N/A'}</p>
          </div>
          {/* duration */}
          <div className="col-span-1">
            <p className="text-gray-500 font-medium text-lg">Duration</p>
            <p className="text-gray-800 font-semibold text-xl">{duration}</p>
          </div>
          {/* number of guests */}
          <div className="col-span-1">
            <p className="text-gray-500 font-medium text-lg">Number of guests</p>
            <p className="text-gray-800 font-semibold text-xl">{reservation.numGuests || 'N/A'}</p>
          </div>
          {/* note */}
          <div className="col-span-1">
            <p className="text-gray-500 font-medium text-lg">Note</p>
            <p className="text-gray-800 font-semibold text-xl">{noteDisplay}</p>
          </div>
        </div>

        {/* thanks message */}
        <p className="text-xl md:text-2xl font-bold text-gray-700">Thank you for booking with us. Enjoy! </p>
      </section>
    </main>
  );
}

export default ReservationData;