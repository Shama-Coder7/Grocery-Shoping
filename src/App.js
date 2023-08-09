import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/style.css';
import './css/responsive.css';
import './css/bootstrap.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/off_canvas_nav.css';

import Login from './Components/Login';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import EditProfile from './Components/EditProfile';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';
import Search from './Components/Search';
import Error from './Components/Error';
import Protected from './Components/Protected';

function App() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.scrollY > 38) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }, []);

  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/homepage"
            element={<HomePage/>}
          />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            path="/edit-profile"
            element={<EditProfile/>}
          />
          <Route path="/search" element={<Search/>} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
