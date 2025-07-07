// import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import HomePage from '../../pages/homePage';
import ContactPage from '../../pages/contactPage';
import CalendarPage from '../../pages/calendarPage';

export default function Header(){
  const location = useLocation();

  return (
    <>
    

    <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Get it done!</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav custom-navbar-spacing">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current={location.pathname === '/' ? 'page' : undefined} to="/Task_App/">Home</Link>
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current={location.pathname === '/' ? 'page' : undefined} to="/Task_App/calendar">Calendar</Link>
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current={location.pathname === '/' ? 'page' : undefined} to="/Task_App/contact">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      
      <Routes>
        <Route path="/Task_App/" element={<HomePage />} />
        <Route path="/Task_App/calendar" element={<CalendarPage />} />
        <Route path="/Task_App/contact" element={<ContactPage />} />
      </Routes>
    
    
    
    
    </>
    
  )
}
