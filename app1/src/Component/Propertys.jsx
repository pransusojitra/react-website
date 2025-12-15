import React from 'react';
import "./Propertys.css";
import img1 from "../assets/photo1.jpeg"
import img2 from "../assets/photo2.jpeg"
import img3 from "../assets/photo3.jpeg"

const Propertys = () => {
    return (
        <div>
            <div className='box'>
                <div className='boxtex'>
                    <h2>Featured Properties</h2>
                    <p className='text-center fs-5' style={{ color: "#696f87" }}>Discover our handpicked selection of premium properties</p>
                </div>

                <div className='box1 d-flex flex-wrap justify-content-center gap-5 w-100 p-3'>
                    <div className="card" style={{ width: "25rem" }}>
                        <img src={img1} className="card-img-top" height={280} alt="..." />
                        <div className="card-body">
                            <div className='cardtx d-flex gap-2'>
                                <h5 className="card-title">Luxury Apartment in Downtown</h5>
                                <h5 className="card-title">₹2.5 Cr</h5>
                            </div>

                            <p className="card-text d-flex gap-1 mt-3" style={{ color: "#696f87" }}>
                                <i class="fa-solid fa-location-dot"></i>
                                <h6>Connaught Place, New Delhi</h6>
                            </p>

                            <div className='boxtx3 d-flex justify-content-around' style={{ color: "#696f87" }}>
                                <p><i class="fa-solid fa-bed pe-3"></i>3 Beds</p>
                                <p><i class="fa-solid fa-bath pe-3"></i>2 Baths</p>
                                <p><i class="fa-regular fa-square pe-3"></i>1,200 sq ft</p>
                            </div>

                            <a href="#" className="btn border border-2 w-100 mt-4"><i class="fa-regular fa-eye mx-2"></i>View Details</a>
                        </div>
                    </div>



                    <div className="card border border-2" style={{ width: "25rem" }}>
                        <img src={img2} className="card-img-top" height={280} alt="..." />
                        <div className="card-body">
                            <div className="cardtx d-flex gap-2">
                                <h5 className="card-title">Modern Villa with Garden</h5>
                                <h5 className="card-title">₹45,000/month</h5>
                            </div>
                            <p className="card-text d-flex gap-1 mt-3" style={{ color: "#696f87" }}>
                                <i class="fa-solid fa-location-dot"></i>
                                <h6>Sector 15, Gurgaon</h6>
                            </p>

                            <div className='boxtx3 d-flex justify-content-around' style={{ color: "#696f87" }}>
                                <p><i class="fa-solid fa-bed pe-3"></i>4 Beds</p>
                                <p><i class="fa-solid fa-bath pe-3"></i>3 Baths</p>
                                <p><i class="fa-regular fa-square pe-3"></i>2,500 sq ft</p>
                            </div>

                            <a href="#" className="btn border border-2 w-100"><i class="fa-regular fa-eye mx-2"></i>View Details</a>
                        </div>
                    </div>




                    <div className="card" style={{ width: "25rem" }}>
                        <img src={img3} className="card-img-top" height={280} alt="..." />
                        <div className="card-body">
                            <div className="cardtx d-flex gap-5">
                                <h5 className="card-title">Penthouse with City View</h5>
                                <h5 className="card-title">₹5.2 Cr</h5>
                            </div>
                            <p className="card-text d-flex gap-1 mt-3" style={{ color: "#696f87" }}>
                                <i class="fa-solid fa-location-dot"></i>
                                <h6>Bandra West, Mumba</h6>
                            </p>

                            <div className='boxtx3 d-flex justify-content-around' style={{ color: "#696f87" }}>
                                <p><i class="fa-solid fa-bed pe-3"></i>5 Beds</p>
                                <p><i class="fa-solid fa-bath pe-3"></i>4 Baths</p>
                                <p><i class="fa-regular fa-square pe-3"></i>3,200 sq ft</p>
                            </div>

                            <a href="#" className="btn border border-2 w-100 mt-4"><i class="fa-regular fa-eye mx-2"></i>View Details</a>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-center align-items-center mt-4 p-2'>

                    <button type="button" class="btn border border-2 d-flex justify-content-center align-items-center">
                        View all Properties
                        <i class="fa-solid fa-arrow-right mt-1 mx-2"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Propertys;
