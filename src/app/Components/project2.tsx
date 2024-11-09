"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image"; 
import Link from "next/link";

export default function Project2() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div id="project2">
    <section className="project-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h1>My Projects</h1>
          <p>
            "I built these projects to challenge myself and showcase my skills in HTML, CSS, TypeScript, and Next.js. Through hands-on practice and experimentation, I aimed to push my limits and explore the possibilities of modern web development. Each project represents a milestone in my learning journey, demonstrating my growth and proficiency in creating responsive, efficient, and user-friendly web applications."
          </p>
        </div>
        <div className="project-grid">
          <div className="project-card" data-aos="flip-left">
            <div className="image-container">
            <Image 
            alt="HTML Assignments"
              className="project-image"
             src="/Assest/Pictures/html.jpeg"
              width={500} height={500} />
              
              <div className="overlay">
                <div className="details">
                  <h2>HTML Assignments</h2>
                  <p>
                    The first step of any web developer. I didn't make any projects related to HTML but made some assignments for practice.
                  </p>
                  <a href="/HTML" className="link">View Projects...</a>
                </div>
              </div>
            </div>
          </div>
  
          <div className="project-card" data-aos="flip-left">
            <div className="image-container">
            <Image alt="HTML Assignments"
                   className="project-image"
                    src="/Assest/Pictures/css.jpeg" 
                    width={500} height={800} />

              <div className="overlay">
                <div className="details">
                  <h2>CSS Projects</h2>
                  <p>
                    These projects highlight my CSS skills, showcasing animations, layouts, and responsive designs.
                  </p>
                  <a href="/CSS" className="link">View Projects...</a>
                </div>
              </div>
            </div>
          </div>


          <div className="project-card" data-aos="flip-left">
            <div className="image-container">
            <img alt="HTML Assignments"
                   className="project-image"
                    src="/Assest/Pictures/type.jpeg" 
               />
              <div className="overlay">
                <div className="details">
                  <h2>CSS Projects</h2>
                  <p>
                    These projects highlight my CSS skills, showcasing animations, layouts, and responsive designs.
                  </p>
                  <a href="/CSS" className="link">View Projects...</a>
                </div>
              </div>
            </div>
          </div>



          <div className="project-card" data-aos="flip-left">
            <div className="image-container">
            <img alt="Nextjs Assignments" 
                   className="project-image" src="/Assest/Pictures/next.jpeg" />
              <div className="overlay">
                <div className="details">
                  <h2>CSS Projects</h2>
                  <p>
                    These projects highlight my CSS skills, showcasing animations, layouts, and responsive designs.
                  </p>
                  <a href="/CSS" className="link">View Projects...</a>
                </div>
              </div>
            </div>
          </div>


          

        </div>
      </div>
    </section>
  </div>
  
  
  );
}
