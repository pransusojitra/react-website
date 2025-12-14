import React from 'react';
import "./OPtion.css";

const Option = () => {
    return (
        <div>
            <div className='option mt-4 d-flex flex-wrap justify-content-center'>
                <div className='option1 d-flex flex-column align-items-center'>
                    <h4>Why Choose EliteHomes?</h4>
                    <p>Your trusted partner in real estate with unmatched expertise</p>

                    <div className='option2 d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column gap-3'>
                        <div className="card mt-4 shadow-sm w-sm-100 w-md-50 w-lg-25" style={{height: "200px"}}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                <p id='round'><i class="fa-solid fa-check fs-4"></i></p>
                                <h5 className="card-title">Verified Properties</h5>
                                <p className="card-text">All properties are legally verified and RERA approved</p>
                            </div>
                        </div>


                        <div className="card mt-4 shadow-sm w-sm-100 w-md-50 w-lg-25" style={{height: "200px"}}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                <p id='round'><i class="fa-regular fa-star fs-4"></i></p>
                                <h5 className="card-title">Expert Guidance</h5>
                                <p className="card-text">Professional agents with 10+ years of experience</p>
                            </div>
                        </div>

                        <div className="card mt-4 shadow-sm w-sm-100 w-md-50 w-lg-25" style={{height: "200px"}}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                <p id='round'><i class="fa-solid fa-location-dot fs-4"></i></p>
                                <h5 className="card-title">Prime Locations</h5>
                                <p className="card-text">Properties in Delhi NCR, Mumbai, Bangalore & more</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Option;
