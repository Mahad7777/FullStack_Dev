import React from 'react';
import logo from './assets/Logo.png'; // Assuming logo.jpg is in the same directory as your component

function App() {
  return (
    <div style={{ backgroundColor: '#865D36' }}>
      <header style={{ backgroundColor: '#865D36', color: 'black', padding: '10px 20px' }}>
  <div className="container d-flex justify-content-between align-items-center">
    <div className="logo">
      <img src={logo} alt="Logo" height="75" width="75" className="rounded-circle" />
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



      <section className='py-5' style={{ backgroundColor: '#93785B' }}>
        <div className="container mt-5 mb-5" >
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card text-center" style={{ backgroundColor: '#865D36', color: '#fff', marginBottom: '20px', height: '300px', borderRadius: '10px' }}>
                <div className="card-body d-flex flex-column justify-content-center">
                  <h4 className="card-title">Quality Ingredients</h4>
                  <p className="card-text">Using only the freshest and finest ingredients.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center" style={{ backgroundColor: '#865D36', color: '#fff', marginBottom: '20px', height: '300px', borderRadius: '10px' }}>
                <div className="card-body d-flex flex-column justify-content-center">
                  <h4 className="card-title">Affordable Prices</h4>
                  <p className="card-text">Enjoy delicious meals at budget-friendly prices.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center" style={{ backgroundColor: '#865D36', color: '#fff', marginBottom: '20px', height: '300px', borderRadius: '10px' }}>
                <div className="card-body d-flex flex-column justify-content-center">
                  <h4 className="card-title">Global Cuisine</h4>
                  <p className="card-text">Experience flavors from around the world.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 mt-4 mb-4">
          <div className="progressTop mb-4">
            <div className="progress mt-6" style={{ height: '20px' }}>
              <div className="progress-bar" role="progressbar" style={{ width: '70%', backgroundColor: 'black' }}></div>
            </div>
            <div className="progress mt-5" style={{ height: '20px' }}>
              <div className="progress-bar" role="progressbar" style={{ width: '50%', backgroundColor: 'black' }}></div>
            </div>
            <div className="progress mt-5" style={{ height: '20px' }}>
              <div className="progress-bar" role="progressbar" style={{ width: '90%', backgroundColor: 'black' }}></div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <div className="card text-center" style={{ backgroundColor: '#93785B', marginBottom: '20px', height: '200px' }}>
                <div className="card-body d-flex flex-column justify-content-center">
                  <h2>100+</h2>
                  <h3>Dishes</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card text-center" style={{ backgroundColor: '#93785B', marginBottom: '20px', height: '200px' }}>
                <div className="card-body d-flex flex-column justify-content-center">
                  <h2>20+</h2>
                  <h3>Cuisines</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card text-center" style={{ backgroundColor: '#93785B', height: '200px' }}>
                <div className="card-body d-flex flex-column justify-content-center">
                  <h2>10+</h2>
                  <h3>Chefs</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card text-center" style={{ backgroundColor: '#93785B', height: '200px' }}>
                <div className="card-body d-flex flex-column justify-content-center">
                  <h2>50+</h2>
                  <h3>Happy Customers</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="py-5" style={{ backgroundColor: '#93785B' }}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card text-center p-4" style={{ backgroundColor: '#865D36', color: '#fff' }}>
              <h1>Contact Us</h1>
              <p>We'd love to hear from you!</p>
              <form>
                <div className="mb-3">
                  <textarea className="form-control" style={{ backgroundColor: '#93785B', color: '#fff' }} rows="5" placeholder="Enter your message..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

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

    </div>
  );
}

export default App;
