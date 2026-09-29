function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Jhonsley Desulma</h3>
  
            <p>
              Web Developer · Python Developer ·
              Cybersecurity Enthusiast
            </p>
          </div>
  
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
  
        <div className="footer-bottom">
          <p>
            © {currentYear} Jhonsley Desulma. All rights reserved.
          </p>
  
          <p>
            Built with React.js
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;