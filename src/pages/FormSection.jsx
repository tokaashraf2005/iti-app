import React, { useState } from 'react';

function FormSection() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form submitted:', formData);
    alert('Message sent successfully (check console for data)!');
    setFormData({
      fname: '',
      lname: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4 gx-5">
          {/* Contact Form */}
          <div className="col-12 col-lg-6">
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3 needs-validation">
              {/* First Name */}
              <div>
                <label htmlFor="fname" className="form-label text-secondary fw-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control shadow-sm rounded p-2"
                  id="fname"
                  name="fname"
                  placeholder="First Name"
                  value={formData.fname}
                  onChange={handleChange}
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lname" className="form-label text-secondary fw-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control shadow-sm rounded p-2"
                  id="lname"
                  name="lname"
                  placeholder="Last Name"
                  value={formData.lname}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="form-label text-secondary fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control shadow-sm rounded p-2"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="form-label text-secondary fw-semibold">
                  Message
                </label>
                <textarea
                  className="form-control shadow-sm rounded p-2"
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Your Message..."
                  required
                  aria-label="Message Content"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* send button */}
              <button type="submit" className="btn btn-dark rounded fw-semibold py-2 px-4 w-100">
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="col-12 col-lg-6">
            <div className="w-100 h-100 overflow-hidden" id="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465130.6712591586!2d54.8882846175712!3d24.387099419050838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2z2KPYqNmIINi42KjZiiAtINin2YTYpdmF2KfYsdin2Kog2KfZhNi52LHYqNmK2Kkg2KfZhNmF2KrYrdiv2Kk!5e0!3m2!1sar!2seg!4v1752586121794!5m2!1sar!2seg"
                width="630"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location of 3legant Store on Google Maps" 
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormSection; 