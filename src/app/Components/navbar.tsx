import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiFillTwitterCircle } from "react-icons/ai";

function Navbar() {
    return (
        //   NavBar

        <div className="navbar">
    <header className="header">
        <div className="container">
            <div className="logo">
                <span className="name">
                    <Link href="#Home">AREEBA <span id="fname">YASEEN.</span></Link>
                </span>
            </div>
            <nav className="navigation">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="#AboutMe" className="nav-link">About</Link>
                <Link href="#Skills" className="nav-link">Skills</Link>
                <Link href="#project2" className="nav-link">Projects</Link>
                <Link href="#contact" className="nav-link">Contact</Link>
            </nav>
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
    </header>
</div>
    );
}

export default Navbar;
