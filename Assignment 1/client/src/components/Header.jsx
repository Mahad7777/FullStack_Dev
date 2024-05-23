// Header.js
import React from 'react';
// import logo from './assets/Logo.png'; // Assuming logo.jpg is in the same directory as your component

function Header() {
  return (
    <header style={{ backgroundColor: '#865D36', color: 'black', padding: '10px 20px' }}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <img alt="Logo" height="75" width="75" className="rounded-circle" />
        </div>
        <div className="d-flex align-items-center">
          <h2 className="me-4 mb-0">Home</h2>
          <h2 className="me-4 mb-0">Menu</h2>
          <h2 className="mb-0">About Us</h2>
        </div>
        <form className="d-flex">
          <input type="text" className="form-control me-2" style={{ backgroundColor: '#fff' }} placeholder="Search for dishes..." />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
