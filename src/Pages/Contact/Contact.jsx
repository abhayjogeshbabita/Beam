import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-inner">
        <div className="contact-text">
          <h2>Contact Us?</h2>
          <p className="subtext">
            Feel free to reach out to us at any time. We are here to help with orders, product questions, and any feedback you may have. <br /><br />
            Our customer service team can assist by email Monday through Friday, from 9am to 5pm PT (excluding holidays). We aim to get back to you within 2 business days.
          </p>
          <p className="required-note">* indicates a required field</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="First and last name*" required />
          <input type="tel" placeholder="Phone number*" required />
          <input type="text" placeholder="Topic*" required />
          <textarea placeholder="Tell us the details..." required></textarea>
          <button type="submit">SUBMIT</button>
        </form>

        <p className="disclaimer">
          This site is protected by reCAPTCHA — <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
        </p>
      </div>
    </div>
  );
};

export default Contact;
