import Footer from "./components/Footer";
import About from "./components/About";
import Review from "./components/review";
import LeaveReview from "./components/LeaveReview";
import Reservation from "./components/reservation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReservationData from "./components/ReservData";

export default function App() {
  return (
    <>
      <Router basename="/ArtisanBlend-Restaurant-App"> {/*basename to tell react that / means /ArtisanBlend-Restaurant-App */}
        <Routes>
          <Route path="/" element={<Reservation />} />
          <Route path="/reservation-successeded" element={<ReservationData />} />
          {/*
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/leave-review" element={<LeaveReview />} />
            <Route path="/footer" element={<Footer />} />
          */}
        </Routes>
      </Router>
    </>
  );
}