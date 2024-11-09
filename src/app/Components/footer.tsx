"use client";
import React, { useEffect, useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Typewriter from 'typewriter-effect';

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="footer">
  <div className="container footer-container">
    <div className="footer-text">
      <p>
        {isClient && (
          <Typewriter
            options={{
              strings: ['Contact me through'],
              autoStart: true,
              loop: true,
            }}
          />
        )}
      </p>
    </div>
    <div className="social-links">
      <a href="https://www.facebook.com" className="social-icon facebook">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com" className="social-icon instagram">
        <GrInstagram />
      </a>
      <a href="https://www.linkedin.com/in/areeba-yaseen-6523552b5/" className="social-icon linkedin">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/areebayaseen15" className="social-icon github">
        <FaGithub />
      </a>
      <a href="https://twitter.com/yourprofile" className="social-icon twitter">
        <AiFillTwitterCircle />
      </a>
    </div>
  </div>
</footer>

  );
}

export default Footer;
