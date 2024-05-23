// Stats.js
import React from 'react';

function Stats() {
  return (
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
  );
}

export default Stats;
