import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div>
            <div className='container mt-5'>

                <div className='text-center mb-4'>
                    <h1><b>Get In Touch</b></h1>
                    <p id='cnt'>Ready to find your dream property? Our expert team is here to help you every step of the way. Contact us today for personalized assistance.</p>
                </div>

                <div className="row g-4 align-items-stretch">

                    <div className="col-lg-6 col-12">
                        <div className="border border-2 p-4 rounded-3">
                            <form>
                                <h4>Send Us a Message</h4>
                                <p id='cnt'>Fill out the form below and we'll get back to you within 24 hours</p>

                                <div className='row g-3'>
                                    <div className='d-flex gap-3'>
                                        <div>
                                            <label form='firstname' className='mb-1'>First Name *</label>
                                            <input type="text" className='form-control' placeholder="Enter Your First name" />
                                        </div>
                                        <div>
                                            <label form='firstname' className='mb-1'>Last Name *</label>
                                            <input type="text" className='form-control' placeholder="Enter Your Last name" />
                                        </div>
                                    </div>
                                    <div>
                                        <label form='email' className='mb-1'>Email Address</label>
                                        <input type="text" className='form-control' placeholder='+91 98256 45645' />
                                    </div>
                                    <div>
                                        <label form='email' className='mb-1'>Phone Number</label>
                                        <input type="text" className='form-control' placeholder='Enter Your Number' />
                                    </div>
                                    <div>
                                        <label form='contactbx' className='mb-1'>I'm interested in *</label>
                                        <select className="contactbx4 bg-white border border-1 rounded-2 w-100" style={{ height: "40px" }}>
                                            <option>Buying a Property</option>
                                            <option>Selling a Property</option>
                                            <option>Renting a Property</option>
                                            <option>Investment Opportunities </option>
                                            <option>Property Valuation</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label form='contactbx' className='mb-1'>Budget Range</label>
                                        <select className="contactbx4 bg-white border border-1 rounded-2 w-100" style={{ height: "40px" }}>
                                            <option>Select Budget range</option>
                                            <option>Under ₹50 Lakhs </option>
                                            <option>₹50 Lakhs-₹1 Crore</option>
                                            <option>₹1 Crore-₹2 Crore</option>
                                            <option>₹2 Crore-₹5 Crore</option>
                                            <option>Above ₹5 Crore</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className='mb-1'>Message</label>
                                        <input type="text" className='form-control' placeholder='Tell us more about your requirements...' style={{ height: "80px" }} />
                                    </div>

                                    <button className='conbtn btn-primary rounded-2 text-white w-100' style={{ background: "#0b1c40", height: "40px" }}><i class="fa-regular fa-message me-2"></i>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="col-lg-6 col-12">

                        <div className="border border-2 p-4 rounded-3">
                            <h4 className='mb-3'>Quick Actions</h4>

                            <div className='row g-3'>
                                <div className='border border-1 rounded-3 p-3 text-start'>
                                    <h6>Schedule Property Visit</h6>
                                    <p className='mb-0' id='cnt'>Book a site visit with our experts</p>
                                </div>

                                <div className='border border-1 rounded-3 p-3 text-start'>
                                    <h6>Property Valuation</h6>
                                    <p className='mb-0' id='cnt'>Get free property valuation report</p>
                                </div>

                                <div className='border border-1 rounded-3 p-3 text-start'>
                                    <h6>Schedule Property Visit</h6>
                                    <p className='mb-0' id='cnt'>Discuss investment opportunities</p>
                                </div>

                                <div className='border border-1 rounded-3 p-3 text-start'>
                                    <h6>Legal Assistance</h6>
                                    <p className='mb-0' id='cnt'>Property documentation support</p>
                                </div>
                            </div>
                        </div>

                        <div className='hlpbx border border-1 rounded-2 text-start p-3 mt-4' style={{ backgroundColor: "#fffbf5" }}>
                            <h5 className='mb-4' style={{ color: "#fabd23" }}>Need Immediate Assistance?</h5>

                            <div className='d-flex align-items-start gap-3 mb-3'>
                                <i className="fa-solid fa-phone fs-5 mt-3" style={{ color: "#fabd23" }}></i>
                                <div className="text-start">
                                    <p className='mb-1 fw-bolder'>24/7 Helpline</p>
                                    <h6 className='mb-0' style={{ fontSize: "large", color: "#fabd23" }}>+91 98765 43200</h6>
                                </div>
                            </div>

                            <div className='d-flex align-items-start gap-3'>
                                <i className="fa-regular fa-message fs-5 mt-3" style={{ color: "#fabd23" }}></i>
                                <div className='text-start'>
                                    <p className='mb-1 fw-bolder'>WhatsApp Support</p>
                                    <p className='mb-0 fs-6' style={{ color: "#fabd23" }}>Chat with us instantly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='conbx1 text-center mt-4'>
                    <h4>Our Office Locations</h4>
                    <p id='cnt'>Visit us at any of our offices across major cities</p>

                    <div className='aboutbx d-flex justify-content-center align-items-center flex-lg-row flex-column gap-4 mt-4'>
                        <div className="card shadow-sm w-100 p-2" style={{ height: "280px" }}>
                            <div className="card-body text-start">
                                <h4 className='mb-3'>New Delhi</h4>
                                <div className='d-flex gap-1 mb-2 align-items-start' id='cnt'>
                                    <i className="fa-solid fa-location-dot mt-1"></i>
                                    <p className='mb-0'>Connaught Place, Block A, New Delhi -110001</p>
                                </div>

                                <div className='d-flex gap-3 mb-2 align-items-start' id='cnt'>
                                    <i className="fa-solid fa-phone mt-1"></i>
                                    <p className='mb-0'>+91 98765 43210</p>
                                </div>

                                <div className='d-flex gap-3 mb-2 align-items-start' id='cnt'>
                                    <i className="fa-regular fa-envelope mt-1"></i>
                                    <p className='mb-0'>delhi@elitehomes.com</p>
                                </div>

                                <div className='d-flex gap-3 mb-2 align-items-start' id='cnt'>
                                    <i className="fa-regular fa-clock mt-1"></i>
                                    <p className='mb-0'>Mon-Sat: 9 AM - 7 PM</p>
                                </div>
                            </div>
                            <button type="button" className="btn border border-1 w-100 mb-5">Get Directions</button>
                        </div>

                        <div className="card shadow-sm w-100 p-2" style={{ height: "280px" }}>
                            <div className="card-body text-start">
                                <h4 className='mb-3'>Mumbai</h4>
                                <div className='d-flex gap-3 mb-2 align-items-start' id='cnt'>
                                    <i className="fa-solid fa-location-dot mt-1"></i>
                                    <p className='mb-0'>Bandra Kurla Complex, Mumbai - 400051</p>
                                </div>
                                <div className='d-flex gap-3 mb-2 align-items-start' id='cnt'>
                                    <i className="fa-solid fa-phone mt-1"></i>
                                    <p className='mb-0'>+91 98765 43211</p>
                                </div>
                                <div className='d-flex gap-3 mb-2 align-items-start' id='cnt'>
                                    <i className="fa-regular fa-envelope mt-1"></i>
                                    <p className='mb-0'>mumbai@elitehomes.com</p>
                                </div>

                                <div className='d-flex gap-3 mb-2 align-items-start' id='cnt'>
                                    <i className="fa-regular fa-clock mt-1"></i>
                                    <p className='mb-0'>Mon-Sat: 9 AM - 7 PM</p>
                                </div>

                            </div>
                            <button type="button" className="btn border border-1 w-100 mb-5">Get Directions</button>
                        </div>

                        <div className="card shadow-sm w-100 p-2" style={{ height: "280px" }}>
                            <div className="card-body text-start">
                                <h4 className='mb-3'>Bangalore</h4>
                                <div className='d-flex gap-3 mb-2 align-items-start' id='cnt'>
                                    <i className="fa-solid fa-location-dot mt-1"></i>
                                    <p className='mb-0'>MG Road, Bangalore - 560001</p>
                                </div>

                                <div className='d-flex gap-3 mb-2 align-items-start' id='cnt'>
                                    <i className="fa-solid fa-phone mt-1"></i>
                                    <p className='mb-0'>+91 98765 43212</p>
                                </div>
                                <div className='d-flex gap-3 mb-2 align-items-start' id='cnt'>
                                    <i className="fa-regular fa-envelope mt-1"></i>
                                    <p className='mb-0'>bangalore@elitehomes.com</p>
                                </div>
                                <div className='d-flex gap-3 mb-2 align-items-start' id='cnt'>
                                    <i className="fa-regular fa-clock mt-1"></i>
                                    <p className='mb-0'>Mon-Sat: 9 AM - 7 PM</p>
                                </div>
                            </div>
                            <button type="button" className="btn border border-1 w-100 mb-5">Get Directions</button>
                        </div>

                    </div>
                </div>

                <div className='mt-5 text-center'>
                    <h2>Find Us on Map</h2>
                    <p id='cnt'>Located in the heart of major business districts</p>
                    <div className='mapbx d-flex flex-column justify-content-center align-items-center rounded-3' style={{ height: "300px", backgroundColor: "#fcfcfc" }}>
                        <i className="fa-solid fa-location-dot fs-1" id='cnt'></i>
                        <h6 className='fs-5 mt-3'>Interactive Map</h6>
                        <p id='cnt'>Google Maps integration would be displayed here</p>
                    </div>
                </div>

                <div className='conbx2 mt-5 text-center'>
                    <h1>Frequently Asked Questions</h1>
                    <p id='cnt'>Quick answers to common questions</p>
                    <div className='mx-auto mt-4 w-75 w-md-50 d-flex flex-column gap-4'>
                        <div className='border border-1 rounded-3 p-3 text-start mb-3'>
                            <h6>How long does the property buying process take?</h6>
                            <p className='mb-0' id='cnt'>The typical property buying process takes 30-45 days from offer acceptance to completion, depending on financing and legal verification.</p>
                        </div>

                        <div className='border border-1 rounded-3 p-3 text-start mb-3'>
                            <h6>Do you charge any fees for property search?</h6>
                            <p className='mb-0' id='cnt'>Our property search and consultation services are completely free for buyers. We only charge a commission upon successful transaction completion.</p>
                        </div>

                        <div className='border border-1 rounded-3 p-3 text-start mb-3'>
                            <h6>Can you help with home loan arrangements?</h6>
                            <p className='mb-0' id='cnt'>Yes, we have partnerships with leading banks and can help you get pre-approved loans at competitive interest rates.</p>
                        </div>

                        <div className='border border-1 rounded-3 p-3 text-start mb-3'>
                            <h6>Do you provide legal assistance for property documentation?</h6>
                            <p className='mb-0' id='cnt'>Absolutely! Our legal team ensures all documentation is verified and compliant with local regulations.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Contact;
