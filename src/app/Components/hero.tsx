"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Navbar from "./navbar";
import AOS from "aos";
import "aos/dist/aos.css"; 

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: 'ease-in-out', 
      once: true,
    });
  }, []);

  return (
    <>
    <Navbar />
    <div id="#">
    <section className="custom-section">
  <div className="custom-overlay"></div>
  <div className="custom-container">
    {/* Text Section */}
    <div className="custom-text-section">
      <h1 className="custom-title">Hello! I'm</h1>
      <h1 className="custom-highlight">
        <Typewriter
          options={{
            strings: ["Areeba Yaseen", "Pursuing Web Development", "And Cloud Native AI"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className="custom-paragraph">
        "A budding programmer with a passion for learning and creating. I'm excited to share my journey in the world of coding, where I'm constantly discovering new concepts, tools, and technologies. This portfolio showcases my early projects and experiments, highlighting my enthusiasm and dedication to growth. As I continue to learn and improve, I'm eager to take on new challenges and collaborate with others. Join me on this coding adventure, and let's explore the possibilities together!"
      </p>
      <div className="custom-button-container">
        <Link href={"#AboutMe"}>
          <button className="custom-button">
            More About Me
          </button>
        </Link>
      </div>
    </div>
    {/* Image Section */}
    <div className="custom-image-section">
      <Image
       className="custom-image animate-image"
        alt="Profile pic"
        width={600}
        height={600}
        src="/Assest/Pictures/areeba.png"
      />
    </div>
  </div>
</section>

    </div>
  </>
  );
}
