// ProgressBars.js
import React from 'react';

function ProgressBar() {
  return (
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
  );
}

export default ProgressBar;
