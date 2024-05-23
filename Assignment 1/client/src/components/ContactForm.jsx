// ContactForm.js
import React from 'react';

function ContactForm() {
  return (
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
  );
}

export default ContactForm;
