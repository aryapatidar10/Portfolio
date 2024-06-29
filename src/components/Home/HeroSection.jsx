import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Arya</p>
          <h3 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span> <br />
            Developer
          </h3>
          <p className="hero--section-description">
            I'm a pre-final year web developer with expertise in HTML, CSS, Bootstrap, JavaScript, and SQL, React.
            Passionate about creating user-friendly and responsive websites.
          </p>
          <p> &nbsp;</p>
        </div>
        <Link
          to="Contact"
          smooth={true}
          offset={-70}
          duration={500}
          className="btn btn-primary"
        >
          Get In Touch
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/img_1-remove-bg.png" alt="Hero Section" />
      </div>
    </section>
  );
}
