import React from 'react';
import "./Last.jsx";


const Last = () => {
  return (
    <div>
      <div className='subbox' style={{ background: "#1a3366", color: "white" }}>
        <div className='subbox1 d-flex justify-content-evenly pt-4 flex-column flex-lg-row flex-md-row ps-3 gap-3'>
          <div className='subbox2'>
            <h4>EliteHomes</h4>
            <p style={{ color: "#d1d5de" }}>Your trusted partner in finding the perfect property.</p>
          </div>

          <div className='subbox2'>
            <h5>Quick Links</h5>
            <p style={{ color: "#d1d5de" }}>Properties</p>
            <p style={{ color: "#d1d5de" }}>Projects</p>
            <p style={{ color: "#d1d5de" }}>About Us</p>
            <p style={{ color: "#d1d5de" }}>Contact</p>
          </div>

          <div className='subbox2'>
            <h5>Services</h5>
            <p style={{ color: "#d1d5de" }}>Buy Property</p>
            <p style={{ color: "#d1d5de" }}>Sell Property</p>
            <p style={{ color: "#d1d5de" }}>Rent Property</p>
            <p style={{ color: "#d1d5de" }}>Property Management</p>
          </div>

          <div className='subbox2'>
            <h5>Contact Info</h5>
            <p style={{ color: "#d1d5de" }}><i class="fa-solid fa-phone text-danger pe-3"></i>+91 98765 43210</p>
            <p style={{ color: "#d1d5de" }}><i class="fa-solid fa-envelope text-light pe-2"></i> info@elitehomes.com</p>
            <p style={{ color: "#d1d5de" }}><i class="fa-solid fa-map-pin text-danger pe-2"></i>Delhi NCR, India</p>
          </div>
        </div>
        <hr className='mx-5 my-5'></hr>
        <div className='subbox3 d-flex justify-content-center mt-5' style={{ color: "#d1d5de" }}>
          <p>© 2024 EliteHomes. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Last;
