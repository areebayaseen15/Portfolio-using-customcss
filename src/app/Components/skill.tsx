"use client";
import React, { useEffect } from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { AiOutlineJavaScript } from "react-icons/ai";
import { TbBrandTailwind } from "react-icons/tb";

const Skill = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, 
            easing: 'ease-in-out', 
            once: true,
        });
    }, []);

    return (
        <div id="Skills" className="skills-section">
        <section className="skills-content">
            <div className="skills-container">
                <h1 className="skills-title">My Skills</h1>
                <p className="skills-description">
                    Skilled in HTML, CSS, TypeScript, and Next.js, with expertise in building responsive and scalable web applications. Passionate about delivering high-quality solutions and staying up-to-date with the latest web development trends and technologies.
                </p>
                <div className="skills-cards">
                    {/* Skill Card 1 */}
                    <div className="skill-card" data-aos="fade-up">
                        <FaHtml5 className="skill-icon html-icon" />
                        <h2 className="skill-name">HTML</h2>
                        <p className="skill-info">Building structured and semantic web pages.</p>
                    </div>
                    {/* Skill Card 2 */}
                    <div className="skill-card" data-aos="fade-up" data-aos-delay="100">
                        <FaCss3Alt className="skill-icon css-icon" />
                        <h2 className="skill-name">CSS</h2>
                        <p className="skill-info">Crafting beautiful and responsive designs.</p>
                    </div>
                    {/* Skill Card 3 */}
                    <div className="skill-card" data-aos="fade-up" data-aos-delay="300">
                        <AiOutlineJavaScript className="skill-icon js-icon" />
                        <h2 className="skill-name">JavaScript</h2>
                        <p className="skill-info">Building fast and scalable JavaScript applications.</p>
                    </div>
                    
                    {/* Skill Card 4 */}
                    <div className="skill-card" data-aos="fade-up" data-aos-delay="300">
                        <SiTypescript className="skill-icon ts-icon" />
                        <h2 className="skill-name">Typescript</h2>
                        <p className="skill-info">Building fast and scalable JavaScript applications.</p>
                    </div>
                    {/* Skill Card 5 */}
                    <div className="skill-card" data-aos="fade-up" data-aos-delay="300">
                        <TbBrandTailwind className="skill-icon tailwind-icon" />
                        <h2 className="skill-name">Tailwind Css</h2>
                        <p className="skill-info">Crafting more beautiful and responsive designs.</p>
                    </div>
                     {/* Skill Card 6 */}
                     <div className="skill-card" data-aos="fade-up" data-aos-delay="300">
                        <RiNextjsFill className="skill-icon nextjs-icon" />
                        <h2 className="skill-name">Next Js</h2>
                        <p className="skill-info">   Building fast and scalable React applications.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
};

export default Skill;
