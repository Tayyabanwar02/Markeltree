import React from "react";
import Link from "next/link";

const MainMenu = () => {
  return (
    <>
      <nav id="main-menu" className="te-main-menu">
        <ul className="te-main-list">
          <li>
            <Link href="/index
            ">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blogs</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          
        </ul>
      </nav>
    </>
  );
};

export default MainMenu;
