// import React from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import ContactPage from '../../pages/contactPage';
import HomePage from '../../pages/homePage';

export default function Header(){
  return (
    <>
    {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Pricing</a>
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
      </nav> */}



    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/about">TaskList</Link> */}
        <Link to="/contact">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<TaskList />} /> */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
    
    
    
    </>
    
  )
}
