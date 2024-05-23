// Card.js
import React from 'react';

function Card({ title, text }) {
  return (
    <div className="card text-center" style={{ backgroundColor: '#865D36', color: '#fff', marginBottom: '20px', height: '300px', borderRadius: '10px' }}>
      <div className="card-body d-flex flex-column justify-content-center">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;
