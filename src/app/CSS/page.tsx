"use client"
import React, { useEffect } from 'react';
import Image from "next/image";
import Navbar2 from '../Components/nav2';
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from '../Components/Card';

const NextJsProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="project-section">
  <div className="container">
    <h1 className="section-title" data-aos="fade-up">
      My Css Projects
    </h1>

    <div className="card-grid">
      {/* Card 1 */}
      <div className="card" data-aos="fade-up" id="bgpink">
        <Image
          src="/Assest/Pictures/food panda.gif"
          alt="Card"
          width={100}
          height={100}
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">Food Panda Card</h2>
          <p className="card-text">  Created a Food Panda card with simple and elegant CSS.</p>
          <Link href="https://github.com/areebayaseen15/BQl-Web-Dev-Assignments.git"
            className="card-link"
          >
            GitHub Link
          </Link>
        </div>
      </div>

          {/* Card 2 */}
          <div className="card" data-aos="fade-up" id="bgsky">
        <Image
          src="/Assest/Pictures/flexbox.gif"
          alt="CV"
          width={100}
          height={100}
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">Flexbox Practice</h2>
          <p className="card-text">     A single web page created to practice Flexbox layout techniques.</p>
          <Link href="https://github.com/areebayaseen15/BQl-Web-Dev-Assignments.git"
            className="card-link"
          >
            GitHub Link
          </Link>
        </div>
      </div>

          {/* Card 3 */}
          <div className="card" data-aos="fade-up" id="bgred">
        <Image
          src="/Assest/Pictures/Netflix.gif"
          alt="CV"
          width={100}
          height={100}
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">Netflix Clone</h2>
          <p className="card-text"> A clone of the Netflix homepage built with HTML and CSS.</p>
          <Link
               href="https://areebayaseen15.github.io/NetflixClon-html-css/"
               className="card-link" >
                  Deployed Site
                </Link>
          <Link href="https://github.com/areebayaseen15/NetflixClon-html-css.git"
            className="card-link2"
          >
            GitHub Link
          </Link>
        </div>
      </div>

             {/* Card 4 */}
      <div className="card" data-aos="fade-up" id="bgsky">
        <Image
          src="/Assest/Pictures/banoQabil.jpg"
          alt="CV"
          width={100}
          height={100}
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">Bano Qabil Clone</h2>
          <p className="card-text">  A simple and clean clone of the Bano Qabil website.</p>
          <Link href="https://areebayaseen15.github.io/Bnoqabil-WebsiteProject/"
            className="card-link"
          >
          Deployed Site
          </Link>
          <Link  href="https://github.com/areebayaseen15/Bnoqabil-WebsiteProject.git"
            className="card-link2"
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

export default NextJsProjects;
