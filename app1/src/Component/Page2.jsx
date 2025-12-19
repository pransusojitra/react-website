import React from 'react';
import Propartycard from './Propartycard';
import "./Page2.css";

import img1 from "../assets/photo1.jpeg"
import img2 from "../assets/photo2.jpeg"
import img3 from "../assets/photo3.jpeg"

const Page2 = () => {
    return (
        <div>
            <div className='img'>
                <div className="imgtext text-center">
                    <h2 id='textclr'><b>Find Your</b></h2>
                    <h1 id='textclr1'><b>Dream Home</b></h1>
                    <p style={{ fontSize: "18px" }}>Discover premium properties in prime locations across India</p>

                    <div className='imgbox d-flex flex-lg-row flex-md-row flex-column h-auto p-2 gap-3 rounded-2'>
                        <input className="form-control w-sm-100" type="search" placeholder="Search by location, project, or builder..." aria-label="Search" />
                        <div className="dropdown w-100">
                            <select className="form-select bg-white border border-2 rounded-2 w-100">
                                <option>Plot</option>
                                <option>Apartment</option>
                                <option>Villa</option>
                                <option>Commercial</option>
                            </select>
                        </div>
                        <button type="button" className="imgbtn w-100" style={{ backgroundColor: ' #0b1c40' }}>Search</button>
                    </div>

                </div>
            </div>



            <div className='box'>
                <div className='boxtex pt-4'>
                    <h2><b>Featured Properties</b></h2>
                    <p className='text-center fs-5' style={{ color: "#696f87" }}>Discover our handpicked selection of premium properties</p>
                </div>
                <div className='box1 d-flex flex-wrap justify-content-center gap-5 w-100 p-3'>
                    <Propartycard
                        img={img1}
                        title="Luxury Apartment in Downtown"
                        price="₹2.5 Cr"
                        location="Connaught Place, New Delhi"
                        beds="3 Beds"
                        baths="2 Baths"
                        area="1,200 sq ft"
                    />
                    <Propartycard
                        img={img2}
                        title="Modern Villa with Garden"
                        price="₹4.2 cr"
                        location="Sector 15, Gurgaon"
                        beds="4 Beds"
                        baths="3 Baths"
                        area="2,500 sq ft"
                    />
                    <Propartycard
                        img={img3}
                        title="Penthouse with City View"
                        price="₹5.2 Cr"
                        location="Bandra West, Mumbai"
                        beds="5 Beds"
                        baths="4 Baths"
                        area="3,200 sq ft"
                    />
                </div>

                <div className='d-flex justify-content-center align-items-center mt-2'>
                    <button type="button" className="btn border border-1 d-flex justify-content-center align-items-center">
                        View all Properties
                        <i className="fa-solid fa-arrow-right mx-2 mt-2 p-2"></i>
                    </button>
                </div>
            </div>



            <div className='option mt-4 pt-1 d-flex flex-wrap justify-content-center'>
                <div className='option1 d-flex flex-column align-items-center text-center'>
                    <h4 className='fs-2'><b>Why Choose EliteHomes?</b></h4>
                    <p style={{ color: "#696f87" }}>Your trusted partner in real estate with unmatched expertise</p>
                    <div className='option2 d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column gap-3'>
                        <div className="card mt-4 shadow-sm w-sm-100 w-md-50 w-lg-25" style={{ height: "200px" }}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                <p id='round'><i className="fa-solid fa-check fs-4"></i></p>
                                <h5 className="card-title">Verified Properties</h5>
                                <p className="card-text" style={{ color: "#696f87" }}>All properties are legally verified and RERA approved</p>
                            </div>
                        </div>

                        <div className="card mt-4 shadow-sm " style={{ height: "200px" }}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                <p id='round'><i className="fa-regular fa-star fs-4"></i></p>
                                <h5 className="card-title">Expert Guidance</h5>
                                <p className="card-text" style={{ color: "#696f87" }}>Professional agents with 10+ years of experience</p>
                            </div>
                        </div>

                        <div className="card mt-4 shadow-sm" style={{ height: "200px" }}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                <p id='round'><i className="fa-solid fa-location-dot fs-4"></i></p>
                                <h5 className="card-title">Prime Locations</h5>
                                <p className="card-text" style={{ color: "#696f87" }}>Properties in Delhi NCR, Mumbai, Bangalore & more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='reviewbox d-flex flex-row justify-content-center align-items-center'>
                <div className='reviewtx mt-5 d-flex flex-column justify-content-center align-items-center'>
                    <h4 className='fs-2'><b>What Our Clients Say</b></h4>
                    <p style={{ color: "#696f87" }}>Real stories from satisfied customers</p>
                    <div className='mnbox d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column gap-3'>
                        <div className="card mt-4 shadow-sm review-card" style={{ height: "190px" }}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                <p id='reviewicon d-flex gap-1'>
                                    <i className="fa-solid fa-star" style={{ color: "#fabd23" }}></i>
                                    <i className="fa-solid fa-star" style={{ color: "#fabd23" }}></i>
                                    <i className="fa-solid fa-star" style={{ color: "#fabd23" }}></i>
                                    <i className="fa-solid fa-star" style={{ color: "#fabd23" }}></i>
                                    <i className="fa-solid fa-star" style={{ color: "#fabd23" }}></i>
                                </p>
                                <p className="card-text" style={{ color: "#696f87" }}>"EliteHomes helped us find our dream home in just 2 weeks. Excellent service!"</p>
                                <h5 className="card-title">Priya Sharma</h5>
                            </div>
                        </div>

                        <div className="card mt-4 shadow-sm review-card" style={{ height: "190px" }}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                <p id='reviewicon d-flex gap-1'>
                                    <i className="fa-solid fa-star" style={{ color: "#fabd23" }}></i>
                                    <i className="fa-solid fa-star" style={{ color: "#fabd23" }}></i>
                                    <i className="fa-solid fa-star" style={{ color: "#fabd23" }}></i>
                                    <i className="fa-solid fa-star" style={{ color: "#fabd23" }}></i>
                                    <i className="fa-solid fa-star" style={{ color: "#fabd23" }}></i>
                                </p>
                                <p className="card-text" style={{ color: "#696f87" }}>"Professional team, transparent process. Highly recommended for property investment."</p>
                                <h5 className="card-title">Rajesh Kumar</h5>
                            </div>
                        </div>

                        <div className="card mt-4 shadow-sm review-card" style={{ height: "190px" }}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                <p id='reviewicon d-flex gap-1'>
                                    <i className="fa-solid fa-star" style={{ color: "#fabd23" }}></i>
                                    <i className="fa-solid fa-star" style={{ color: "#fabd23" }}></i>
                                    <i className="fa-solid fa-star" style={{ color: "#fabd23" }}></i>
                                    <i className="fa-solid fa-star" style={{ color: "#fabd23" }}></i>
                                    <i className="fa-solid fa-star" style={{ color: "#fabd23" }}></i>
                                </p>
                                <p className="card-text" style={{ color: "#696f87" }}>"Great experience selling my property through EliteHomes. Fair pricing and quick process."</p>
                                <h5 className="card-title">Anita Patel</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='calbox d-flex flex-column justify-content-center align-items-center text-center mt-4'>
                <div className='calbox1 text-white'>
                    <h4 className='fs-2'>Ready to Find Your Home?</h4>
                    <p style={{ color: "#e3e5e8" }}>Get in touch with our experts today</p>

                    <div className="calbtn2 d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column gap-2">
                        <button type="button" className='calbtn w-50 h-25 border rounded-1 p-1' style={{ color: "#0b1c40" }}><i className="fa-solid fa-phone pe-4 py-2"></i>Call Now</button>
                        <button type="button" className='calbtn w-50 h-25 border rounded-1 p-1' style={{ color: "#0b1c40" }}><i className="fa-regular fa-envelope pe-4 py-2"></i>Get Quote</button>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Page2;
