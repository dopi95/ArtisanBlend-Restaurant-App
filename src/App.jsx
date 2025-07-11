import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MenuCategory from './pages/MenuCategory'; // your other route

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/:category" element={<MenuCategory />} />
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}
