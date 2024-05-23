// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#865D36', color: 'black' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h1>Follow Us</h1>
          </div>
          <div className="col-md-4">
            <h1>About Us</h1>
            <p>Delighting taste buds since 2005, we are committed to serving you the best.</p>
          </div>
          <div className="col-md-4">
            <h1>Contact Information</h1>
            <p>Email: info@restaurant.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
