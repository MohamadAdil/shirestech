'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('✅ Message sent successfully!');
      setFormData({ name: '', email: '', contact: '', message: '' });
    } else {
      setStatus('❌ Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12 mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="col-md-12 mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="col-md-12 mb-3">
          <label htmlFor="contact" className="form-label">Contact Number</label>
          <input type="tel" className="form-control" id="contact" value={formData.contact} onChange={handleChange} />
        </div>
        <div className="col-md-12 mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="5" value={formData.message} onChange={handleChange} required />
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn-main">Send Us Message</button>
        </div>
        {status && <p className="mt-3">{status}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
