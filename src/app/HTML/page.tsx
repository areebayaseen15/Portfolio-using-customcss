 "use client"
import React, { useEffect } from 'react';
import Image from "next/image";
import Navbar2 from '../Components/nav2';
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';

const HtmlProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="project-section">
  <div className="container">
    <h1 className="section-title" data-aos="fade-up">
      My HTML Projects
    </h1>

    <div className="card-grid">
      {/* Card 1 */}
      <div className="card" data-aos="fade-up" id="Htmlcard1">
        <Image
          src="/Assest/Pictures/cv.gif"
          alt="CV"
          width={100}
          height={100}
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">CV</h2>
          <p className="card-text">Created a personal and simple CV using only HTML</p>
          <Link href="https://github.com/areebayaseen15/BQl-Web-Dev-Assignments.git"
            className="card-link"
          >
            GitHub Link
          </Link>
        </div>
      </div>

          {/* Card 2 */}
          <div className="card" data-aos="fade-up" id="Htmlcard2">
        <Image
          src="/Assest/Pictures/Table.gif"
          alt="CV"
          width={100}
          height={100}
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">Table in HTML</h2>
          <p className="card-text">    Practiced creating tables with HTML</p>
          <Link href="https://github.com/areebayaseen15/BQl-Web-Dev-Assignments.git"
            className="card-link"
          >
            GitHub Link
          </Link>
        </div>
      </div>

          {/* Card 3 */}
          <div className="card" data-aos="fade-up" id="Htmlcard3">
        <Image
          src="/Assest/Pictures/Table.gif"
          alt="CV"
          width={100}
          height={100}
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">HTML Form</h2>
          <p className="card-text">      Learned how to create forms in HTML</p>
          <Link href="https://github.com/areebayaseen15/BQl-Web-Dev-Assignments.git"
            className="card-link"
          >
            GitHub Link
          </Link>
        </div>
      </div>

             {/* Card 4 */}
      <div className="card" data-aos="fade-up" id="Htmlcard4">
        <Image
          src="/Assest/Pictures/portfolionext.gif"
          alt="CV"
          width={100}
          height={100}
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">Portfolio</h2>
          <p className="card-text"> Created a simple one-page portfolio using HTML and inline CSS</p>
          <Link href="https://github.com/areebayaseen15/BQl-Web-Dev-Assignments.git"
            className="card-link"
          >
            GitHub Link
          </Link>
        </div>
      </div>

    </div>
  </div>
</div>

    </>
  );
};

export default HtmlProjects;
