import Footer from "./components/Footer";
import Header from "./components/Header";
import Reservation from "./components/reservation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReservationData from "./components/ReservData";

export default function App() {
  return (
    <>
      <Header/>
      <Router basename="/ArtisanBlend-Restaurant-App"> {/*basename to tell react that / means /ArtisanBlend-Restaurant-App */}
        <Routes>
          <Route path="/" element={<Reservation />} />
          <Route path="/reservation-successeded" element={<ReservationData />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}