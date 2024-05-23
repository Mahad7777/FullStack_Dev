// App.js
import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import ProgressBars from './components/ProgressBar';
import Stats from './components/Stats';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#865D36' }}>
      <Header />
      <section className='py-5' style={{ backgroundColor: '#93785B' }}>
        <div className="container mt-5 mb-5">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <Card title="Quality Ingredients" text="Using only the freshest and finest ingredients." />
            </div>
            <div className="col-md-4">
              <Card title="Affordable Prices" text="Enjoy delicious meals at budget-friendly prices." />
            </div>
            <div className="col-md-4">
              <Card title="Global Cuisine" text="Experience flavors from around the world." />
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5 mb-5">
        <div className="row">
          <ProgressBars />
          <Stats />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
