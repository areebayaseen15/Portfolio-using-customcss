"use client";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import React, { useEffect, useState } from 'react';

export default function Contact() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div id="contact">
  <section className="contact-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h1>Contact Me</h1>
        <p>
          {isClient && (
            <Typewriter
              options={{
                strings: ['Contact me if you have any queries.'],
                autoStart: true,
                loop: true,
              }}
            />
          )}
        </p>
      </div>
      <div className="form-container">
        <div className="form-group" data-aos="fade-right">
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="input-field" />
          </div>
        </div>
        <div className="form-group" data-aos="fade-left">
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="input-field" />
          </div>
        </div>
        <div className="form-group" data-aos="fade-up">
          <div className="input-wrapper">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" className="textarea-field"></textarea>
          </div>
        </div>
        <div className="form-group" data-aos="zoom-in">
          <button className="submit-button">Send Message</button>
        </div>
      </div>
    </div>
  </section>
</div>

  );
}
