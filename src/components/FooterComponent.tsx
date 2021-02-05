import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="empty-container" />
      <div className="container bg-primary">
        <a href="#" className="footer-link" onClick={() => alert("Privacy Policy")}>
          Privacy Policy
        </a>
        <a href="#" className="footer-link" onClick={() => alert("Terms of Use")}>
          Terms of Use
        </a>
      </div>
    </footer>
  );
};

export default Footer;
