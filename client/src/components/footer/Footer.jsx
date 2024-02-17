import React from 'react'
import './footer.css'
function Footer() {
  return (
    <footer className="footer-container">
    <div className="footer-section">
      <h3>Get in Touch</h3>
      <p>Don’t miss any updates of our new templates and extensions!</p>
      <div className="subscribe">
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </div>
    </div>

    <div className="footer-section">
      <h3>Download</h3>
      <ul>
        <li>Company</li>
        <li>Android App</li>
        <li>iOS App</li>
        <li>Desktop</li>
        <li>Projects</li>
        <li>My Tasks</li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Help</h3>
      <ul>
        <li>FAQ</li>
        <li>Terms & Conditions</li>
        <li>Reporting</li>
        <li>Documentation</li>
        <li>Support Policy</li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Team Solutions</h3>
      <div className="logo-container">
        {/* Add your team logos here */}
        <img src="logo1.png" alt="Logo 1" />
        <img src="logo2.png" alt="Logo 2" />
        <img src="logo3.png" alt="Logo 3" />
        <img src="logo4.png" alt="Logo 4" />
      </div>
    </div>
  </footer>
  )
}

export default Footer
