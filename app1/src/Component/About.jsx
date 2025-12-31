import React from 'react';
import "./About.css";
import img from "../assets/about.jpeg"
import img1 from "../assets/ceo.jpeg"
import img2 from "../assets/head.jpeg"
import img3 from "../assets/sale.jpg"

const About = () => {
  return (
    <div>
      <div className='aboutpg container text-center w-100 py-5'>

        <div className='aboutx mx-auto'>
          <h1>About EliteHomes</h1>
          <p className='fs-5 mt-3' style={{ color: "#646f87" }}>For over 15 years, EliteHomes has been the trusted name in real estate, helping thousands of families find their perfect homes and investors discover lucrative opportunities across India.</p>
        </div>



        <div className='aboutbx d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column gap-3'>
          <div className="card mt-4 shadow-sm w-100 text-center">
            <div className="card-body d-flex flex-column justify-content-center align-items-center gap-2">
              <i id='clk' className="fa-regular fa-clock"></i>
              <h5 style={{ color: "#0b1c40" }}>15+</h5>
              <p id='clr'>Years of Experience</p>
            </div>
          </div>

          <div className="card mt-4 shadow-sm w-100 text-center">
            <div className="card-body d-flex flex-column justify-content-center align-items-center gap-2">
              <i id='clk' className="fa-solid fa-user-group"></i>
              <h5 style={{ color: "#0b1c40" }}>5000+</h5>
              <p id='clr'>Happy Clients</p>
            </div>
          </div>

          <div className="card mt-4 shadow-sm w-100 text-center">
            <div className="card-body d-flex flex-column justify-content-center align-items-center gap-2">
              <i id='clk' className="fa-solid fa-ribbon"></i>
              <h5 style={{ color: "#0b1c40" }}>10000+</h5>
              <p id='clr'>Properties Sold</p>
            </div>
          </div>

          <div className="card mt-4 shadow-sm w-100 text-center">
            <div className="card-body d-flex flex-column justify-content-center align-items-center gap-2">
              <i id='clk' className="fa-solid fa-location-dot"></i>
              <h5 style={{ color: "#0b1c40" }}>25+</h5>
              <p id='clr'>Cities Covered</p>
            </div>
          </div>
        </div>



        <div className='aboutbx1 mt-5'>
          <h2 className='text-center'>Our Story</h2>

          <div className="row align-items-center mt-2 g-4">
            <div className="col-lg-6 col-md-6 col-12">
              <p id='clr'>Founded in 2009 by Rajesh Gupta, EliteHomes began as a small real estate consultancy in Delhi with a simple mission: to make property transactions transparent, efficient, and stress-free.</p>
              <p id='clr'>What started as a two-person operation has grown into one of India's most trusted real estate companies, with a team of over 100 professionals serving clients across 25+ cities.</p>
              <p id='clr'>Today, we continue to uphold our founding principles while embracing technology and innovation to serve our clients better.</p>
            </div>

            <div className="col-lg-6 col-md-6 col-12 text-center">
              <img src={img} alt="Our Story" className="img-fluid rounded-3 shadow-sm" style={{ maxHeight: "300px", objectFit: "cover" }} />
            </div>
          </div>
        </div>



        <div className='aboutbx2 mt-5'>
          <h2><b>Our Core Values</b></h2>
          <p style={{ color: "#646f87" }}>These principles guide everything we do and define who we are as a company</p>

          <div className='aboutcard d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column gap-3'>
            <div className="card mt-4 shadow-sm w-100 text-center" style={{ height: "240px" }}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center gap-2">
                <i id='vlu' className="fa-regular fa-circle-check"></i>
                <h5 style={{ color: "#0b1c40" }}>Integrity</h5>
                <p id='clr'>We maintain the highest standards of honesty and transparency in all our dealings.</p>
              </div>
            </div>

            <div className="card mt-4 shadow-sm w-100 text-center" style={{ height: "240px" }}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center mb-3 gap-2">
                <i id='vlu' className="fa-regular fa-star"></i>
                <h5 style={{ color: "#0b1c40" }}>Excellence</h5>
                <p id='clr'>We strive for perfection in every service we provide to our valued clients.</p>
              </div>
            </div>

            <div className="card mt-4 shadow-sm w-100 text-center" style={{ height: "240px" }}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center gap-2">
                <i id='vlu' className="fa-solid fa-certificate"></i>
                <h5 style={{ color: "#0b1c40" }}>Innovation</h5>
                <p id='clr'>We embrace technology and modern solutions to enhance the property experience.</p>
              </div>
            </div>

            <div className="card mt-4 shadow-sm w-100 text-center" style={{ height: "240px" }}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center mb-3 gap-2">
                <i id='vlu' className="fa-solid fa-user-group"></i>
                <h5 style={{ color: "#0b1c40" }}>Customer Focus</h5>
                <p id='clr'>Our clients' satisfaction and success is at the heart of everything we do.</p>
              </div>
            </div>
          </div>
        </div>



        <div className='aboutbx3 mt-5 text-center'>
          <h1><b>Meet Our Leadership Team</b></h1>
          <p className='fs-5' style={{ color: "#646f87" }}>Experienced professionals dedicated to your real estate success</p>

          <div className='tmbox d-flex justify-content-center align-items-center flex-wrap gap-4'>

            <div className="card shadow-sm" style={{ width: "25rem" }}>
              <img src={img1} className='rounded-top' style={{ height: "260px", objectFit: "cover" }} />
              <div className="card-body d-flex flex-column align-items-start">
                <h5>Rajesh Gupta</h5>
                <p className="card-text">Founder & CEO</p>
                <div className='agebx d-flex gap-2'>
                  <p className='border border-1' id='co1'>20+ years</p>
                  <p id='co2'>Luxury Properties</p>
                </div>
              </div>
            </div>

            <div className="card shadow-sm" style={{ width: "25rem" }}>
              <img src={img3} className='rounded-top' style={{ height: "260px", objectFit: "cover" }} />
              <div className="card-body d-flex flex-column align-items-start">
                <h5>Priya Sharma</h5>
                <p className="card-text">Head of Sales</p>
                <div className='agebx d-flex gap-2'>
                  <p className='border border-1' id='co1'>15+ years</p>
                  <p id='co2'>Residential Properties</p>
                </div>
              </div>
            </div>

            <div className="card shadow-sm" style={{ width: "25rem" }}>
              <img src={img2} className='rounded-top' style={{ height: "260px", }} />
              <div className="card-body d-flex flex-column align-items-start">
                <h5>Amit Kumar</h5>
                <p className="card-text">Commercial Division Head</p>
                <div className='agebx d-flex gap-2'>
                  <p className='border border-1' id='co1'>12+ years</p>
                  <p id='co2'>Commercial Properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='aboutbx4 mt-5 text-center'>
          <h2><b>Our Services</b></h2>
          <p className='fs-5' style={{ color: "#646f87" }}>Comprehensive real estate solutions for all your property needs</p>

          <div className='aboutservice d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column gap-3 mt-4'>

            <div className="card shadow-sm w-100" style={{ height: "240px" }}>
              <div className="card-body d-flex flex-column justify-content-center align-items-start gap-2">
                <h5>Property Buying</h5>
                <p className='text-start' id='clr'>Expert guidance in finding and purchasing your ideal property</p>

                <div className='servictx d-flex flex-column'>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Market Analysis</p>
                  </div>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Market Analysis</p>
                  </div>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Market Analysis</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm w-100" style={{ height: "240px" }}>
              <div className="card-body d-flex flex-column justify-content-center align-items-start gap-2">
                <h5>Property Selling</h5>
                <p className='text-start' id='clr'>Maximize your property value with our proven selling strategies</p>
                <div className='servictx d-flex flex-column'>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Property Valuation</p>
                  </div>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Marketing</p>
                  </div>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Buyer Screening</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm w-100" style={{ height: "240px" }}>
              <div className="card-body d-flex flex-column justify-content-center align-items-start gap-2">
                <h5>Rental Services</h5>
                <p className='text-start' id='clr'>Complete rental solutions for landlords and tenants</p>
                <div className='servictx d-flex flex-column'>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Tenant Verification</p>
                  </div>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Rent Collection</p>
                  </div>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Maintenance Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='aboutservice d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column gap-3 mt-4'>
            <div className="card shadow-sm w-100" style={{ height: "240px" }}>
              <div className="card-body d-flex flex-column justify-content-center align-items-start gap-2">
                <h5>Investment Advisory</h5>
                <p className='text-start' id='clr'>Strategic investment guidance for building your property portfolio</p>
                <div className='servictx d-flex flex-column'>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Market Insights</p>
                  </div>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>ROI Analysis</p>
                  </div>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Portfolio Planning</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm w-100" style={{ height: "240px" }}>
              <div className="card-body d-flex flex-column justify-content-center align-items-start gap-2">
                <h5>Project Marketing</h5>
                <p className='text-start' id='clr'>Comprehensive marketing solutions for builders and developers</p>
                <div className='servictx d-flex flex-column'>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Launch Strategy</p>
                  </div>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Sales Support</p>
                  </div>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Channel Partners</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm w-100" style={{ height: "240px" }}>
              <div className="card-body d-flex flex-column justify-content-center align-items-start gap-2">
                <h5>Legal Assistance</h5>
                <p className='text-start' id='clr'>Expert legal support for all property-related documentation</p>
                <div className='servictx d-flex flex-column'>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Documentation</p>
                  </div>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Registration</p>
                  </div>
                  <div className='d-flex gap-2'>
                    <i className="fa-regular fa-circle-check pt-1" id='grn'></i>
                    <p className='mb-0'>Compliance</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* <div className='aboutbx5 mt-5 text-center d-flex flex-column justify-content-center aligh-items-center'>
          <h2><b>Ready to Work With Us?</b></h2>
          <p className='fs-5 pt-2'>Join thousands of satisfied clients who have trusted EliteHomes with their real estate journey</p>

          <div className='d-flex gap-3 justify-content-center pt-4'>
            <button type="button" class="aboutbtn rounded-2">Contact Us Today</button>
            <button type="button" class="aboutbtn1 border border-2 rounded-2">View Properties</button>

          </div>
        </div> */}

      </div>
    </div>
  );
}

export default About;


