import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// core layout components , thses will go evrywhere
import Header from './components/Header';
import Footer from './components/Footer';

//normal pages & components
import Home from './pages/Home';
import MenuCategory from './pages/MenuCategory';
import About from './components/About';
import Review from './components/review';
import LeaveReview from './components/LeaveReview';

//pages components related to reservation
import Reservation from './components/Reservations';
import ReservationData from './components/ReserveData'; 


export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu/:category" element={<MenuCategory />} />
          <Route path="/book-table" element={<Reservation />} />
          <Route path="/reservation-success" element={<ReservationData />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/leave-review" element={<LeaveReview />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}