import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'; 

const FloatingButtons = () => {
  return (
    <div className="floating-container">
      <a href="https://www.staragroindustry.com/public/static/staragrobroucher_n.pdf" download className="floating-btn brochure-btn">
        <span className="brochure-text">DOWNLOAD <b>BROCHURE</b></span>
        <div className="pdf-icon-wrapper">
          <img src="https://i.ibb.co/gbch4m96/Screenshot-2026-06-08-at-3-33-22-PM.png" alt="PDF" className="pdf-icon-img" />
        </div>
      </a>

      <a href="https://api.whatsapp.com/send?phone=919254123400&text=Hello, I need some information Star Agro Industries." target="_blank" rel="noopener noreferrer" className="floating-btn whatsapp-btn">
        <FaWhatsapp size={28} />
      </a>

      <a href="tel:+91-9254123400" className="floating-btn call-btn">
        <FaPhoneAlt size={22} />
      </a>
    </div>
  );
};

export default FloatingButtons;