// components/ContactForm.jsx
import React from 'react';

const ContactForm = () => {
  return (
    <form>
      <div className="row">
        <div className="col-md-12 mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" />
        </div>
        <div className="col-md-12 mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" />
        </div>
        <div className="col-md-12 mb-3">
          <label htmlFor="contact" className="form-label">Contact Number</label>
          <input type="tel" className="form-control" id="contact" placeholder="Your Contact No." />
        </div>
        <div className="col-md-12 mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn-main">  Send Us Message
          </button>
        </div>
      </div>
    </form >
  );
};

export default ContactForm;
