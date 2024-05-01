import React from 'react';
import logo from './assets/Logo.png';
import './App.css';

function App() {
  return (
    <div style={{ backgroundColor: '#865D36' }}>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" height="75" width="75" />
        </div>
        <nav className="navbar">
          <ul>
            <li><h2>Home</h2></li>
            <li><h2>Menu</h2></li>
            <li><h2>About Us</h2></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" style={{ backgroundColor: '#fff' }} placeholder="Search for dishes..." />
          <button type="submit">Search</button>
        </div>
      </header>

      <br />

      <div>
        <center><img src="placeholder_men_cover.jpg" alt="Delicious Food" width="1610" height="750" /></center>
      </div>

      <section>
        <div className="flex" style={{ backgroundColor: '#93785B' }}>
          <div className="box">
            <h2>Quality Ingredients</h2>
            <p>Using only the freshest and finest ingredients.</p>
          </div>
          <div className="box">
            <h2>Affordable Prices</h2>
            <p>Enjoy delicious meals at budget-friendly prices.</p>
          </div>
          <div className="box">
            <h2>Global Cuisine</h2>
            <p>Experience flavors from around the world.</p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="progressTop">
          <div className="progress-bar">
            <div className="progress" style={{ '--progress-width': '70%', backgroundColor: 'black' }}></div>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ '--progress-width': '50%', backgroundColor: 'black' }}></div>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ '--progress-width': '90%', backgroundColor: 'black' }}></div>
          </div>
        </div>

        <div className="grid-container">
          <div className="card" style={{ backgroundColor: '#93785B' }}>
            <center><h2>100+</h2></center>
            <center><h3>Dishes</h3></center>
          </div>
          <div className="card" style={{ backgroundColor: '#93785B' }}>
            <center><h2>20+</h2></center>
            <center><h3>Cuisines</h3></center>
          </div>
          <div className="card" style={{ backgroundColor: '#93785B' }}>
            <center><h2>10+</h2></center>
            <center><h3>Chefs</h3></center>
          </div>
          <div className="card" style={{ backgroundColor: '#93785B' }}>
            <center><h2>50+</h2></center>
            <center><h3>Happy Customers</h3></center>
          </div>
        </div>
      </div>

      <div className="flex-center">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
        <textarea style={{ backgroundColor: '#93785B' }} className="message" rows="10" cols="50" placeholder="Enter your message..."></textarea>
        <button>Send</button>
      </div>

      <footer>
        <div className="section">
          <h1>Follow Us</h1>
        </div>
        <div className="section">
          <h1>About Us</h1>
          <p>Delighting taste buds since 2005, we are committed to serving you the best.</p>
        </div>
        <div className="section">
          <h1>Contact Information</h1>
          <p>Email: info@restaurant.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
