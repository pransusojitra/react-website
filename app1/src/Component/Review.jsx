import React from 'react';
import "./Review.css";

const Review = () => {
    return (
        <div>
            <div className='reviewbox d-flex flex-row justify-content-center align-items-center'>
                <div className='reviewtx mt-5 d-flex flex-column justify-content-center align-items-center'>
                    <h4>What Our Clients Say</h4>
                    <p>Real stories from satisfied customers</p>

                    <div className='mnbox d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column gap-3'>

                        <div className="card mt-4 shadow-sm review-card" style={{ height: "190px" }}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                <p id='reviewicon d-flex gap-1'>
                                    <i class="fa-solid fa-star" style={{color: "#fabd23"}}></i>
                                    <i class="fa-solid fa-star" style={{color: "#fabd23"}}></i>
                                    <i class="fa-solid fa-star" style={{color: "#fabd23"}}></i>
                                    <i class="fa-solid fa-star" style={{color: "#fabd23"}}></i>
                                    <i class="fa-solid fa-star" style={{color: "#fabd23"}}></i>
                                </p> 
                                <p className="card-text">"EliteHomes helped us find our dream home in just 2 weeks. Excellent service!"</p>
                                 <h5 className="card-title">Priya Sharma</h5>
                            </div>
                        </div>

                          <div className="card mt-4 shadow-sm review-card" style={{ height: "190px" }}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                <p id='reviewicon d-flex gap-1'>
                                    <i class="fa-solid fa-star" style={{color: "#fabd23"}}></i>
                                    <i class="fa-solid fa-star" style={{color: "#fabd23"}}></i>
                                    <i class="fa-solid fa-star" style={{color: "#fabd23"}}></i>
                                    <i class="fa-solid fa-star" style={{color: "#fabd23"}}></i>
                                    <i class="fa-solid fa-star" style={{color: "#fabd23"}}></i>
                                </p> 
                                <p className="card-text">"Professional team, transparent process. Highly recommended for property investment."</p>
                                 <h5 className="card-title">Rajesh Kumar</h5>
                            </div>
                        </div>

                        

                          <div className="card mt-4 shadow-sm review-card" style={{ height: "190px" }}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                <p id='reviewicon d-flex gap-1'>
                                    <i class="fa-solid fa-star" style={{color: "#fabd23"}}></i>
                                    <i class="fa-solid fa-star" style={{color: "#fabd23"}}></i>
                                    <i class="fa-solid fa-star" style={{color: "#fabd23"}}></i>
                                    <i class="fa-solid fa-star" style={{color: "#fabd23"}}></i>
                                    <i class="fa-solid fa-star" style={{color: "#fabd23"}}></i>
                                </p> 
                                <p className="card-text">"Great experience selling my property through EliteHomes. Fair pricing and quick process."</p>
                                 <h5 className="card-title">Anita Patel</h5>
                            </div>
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
