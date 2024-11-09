"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import AOS from "aos";
import "aos/dist/aos.css";  
import { Link } from "react-router-dom";

const AboutMe = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setIsMounted(true); 
  }, []);

  return (
    <div id="AboutMe" className="about-me-section">
    <section className="about-section">
      <div className="container">
        <div className="grid">
          <div className="profile-card" data-aos="fade-up">
            <div className="profile-image">
              <Image
                className="profile-pic"
                alt="Profile pic"
                width={128}
                height={128}
                src="/Assest/Pictures/areeba.png"
              />
            </div>
            <div className="profile-text">
              <h3 className="profile-name">Areeba Yaseen</h3>
              <p className="profile-title">Future Front-End Developer</p>
              {isMounted && (
                <p className="profile-quote">
                  <Typewriter
                    options={{
                      strings: [
                        '"Bringing creativity and performance together in web development."',
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </p>
              )}
            </div>
          </div>
  
          {/* About Me Text */}
          <div className="about-text" data-aos="fade-up">
            <h2 className="about-heading">Who I Am</h2>
            <p className="about-paragraph">
              Hi, I’m <span className="highlight">Areeba Yaseen</span>, pursuing a front-end developer role who enjoys crafting visually appealing and responsive websites.
              With skills in HTML, CSS, TypeScript, and applied in Cloud Native AI, I bring creativity and performance together to build web experiences that stand out.
            </p>
            <p className="about-paragraph">
              I love using modern technology to solve real-world problems, focusing on delivering seamless and dynamic interfaces that provide great user experiences.
              My passion for design, innovation, and continuous learning drives me to stay updated with the latest trends.
            </p>
            <p className="about-paragraph">
              Outside of work, you can find me reading, exploring new tech, and learning ways to keep enhancing my skills in the ever-evolving field of web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default AboutMe;
