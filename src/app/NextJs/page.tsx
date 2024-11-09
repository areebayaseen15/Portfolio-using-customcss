"use client";
import React, { useEffect } from 'react';
import Image from "next/image";
import Navbar2 from '../Components/nav2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NextJsProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="project-section">
  <div className="container">
    <h1 className="section-title" data-aos="fade-up">
      My NextJS Projects
    </h1>

    <div className="card-grid">
       {/* Card1 */}
       <div className="card" data-aos="fade-right">
              <Image
                src="/Assest/Pictures/helloWorld.gif"
                alt="Project 1"
                width={100}
                height={100}
                className="card-image"/>
              <div className="card-content">
                <h2 className="card-title">MILESTONE 1: Hello World</h2>
                <p className="card-text">
                  Developed a simple webpage that displays a personalized "Hello World" message with basic styling.
                </p>
                <a
                  href="#"
                  className="card-link"
                >
                  GitHub Link
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card" data-aos="fade-left">
              <Image
                src="/Assest/Pictures/portfolio.gif"
                alt="Project 2"
                width={100}
                height={100}
                className="card-image" />
              <div className="card-content">
                <h2 className="card-title">MILESTONE 2: Basic UI Design with Tailwind CSS</h2>
                <p className="card-text">
                  Designed and developed a personal portfolio website with at least 3 pages (Home, About, Contact).
                  <br /> Used Tailwind CSS for styling and layout.
                </p>
                <a
                  href="https://q2-milestones.vercel.app/"
                  className="card-link"
                >
                  Deployed Site
                </a>
                <br />
                <a
                  href="https://github.com/areebayaseen15/Q2-milestones.git"
                  className="card-link" 
                >
                  GitHub Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextJsProjects;
