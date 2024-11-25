import React from "react";


export default function Nav() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">MyPortfolio</h1>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a href="#contact" className="cta">
          Hire Me
        </a>
      </div>
    </header>
  );
}
