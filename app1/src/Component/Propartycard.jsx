import React from 'react';

const Propartycard = ({ img, title, price, location, beds, baths, area }) => {
  return (
    <div
    className='card shadow-sm'
    style={{
      maxWidth:"28rem",
      width:"100%",
      // minHeight:"465px"
    }}
    >


        <img src={img} className="card-img-top" height={250} alt="property" />
        <div className="card-body p-3">
          
          <div className="cardtx d-flex justify-content-between">
            <h6 className="card-title mb-1">{title}</h6>
            <p className="card-title fw-semibold mb-1"style={{ fontSize: "14px" }}>{price}</p>
          </div>

          <p className="card-text d-flex mt-3" style={{ color: "#696f87" }}>
            <i className="fa-solid fa-location-dot me-1"></i>{location}
          </p>

          <div className='boxtx3 d-flex justify-content-around' style={{ color: "#696f87" }}>
            <span><i className="fa-solid fa-bed pe-3"></i>{beds}</span>
            <span><i className="fa-solid fa-bath pe-3"></i>{baths}</span>
            <span><i className="fa-regular fa-square pe-3"></i>{area}</span>
          </div>

          <a href="#" className="btn border border-2 w-100 mt-3"><i className="fa-regular fa-eye mx-2"></i>View Details</a>
        </div>
      </div>
  );
}

export default Propartycard;

