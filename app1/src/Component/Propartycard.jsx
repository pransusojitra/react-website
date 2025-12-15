import React from 'react';

const Propartycard = ({ img, title, price, location, beds, baths, area }) => {
  return (
    <div
    className='card shadow-sm'
    style={{
      maxWidth:"28rem",
      width:"100%",
      minHeight:"465px"
    }}
    >

        <img src={img} className="card-img-top" height={250} alt="property" />
        <div className="card-body">
          <div className="cardtx d-flex justify-content-evenly">
            <h5 className="card-title">{title}</h5>
            <h5 className="card-title">{price}</h5>
          </div>

          <p className="card-text d-flex gap-1 mt-3" style={{ color: "#696f87" }}>
            <i class="fa-solid fa-location-dot"></i>
            <h6>{location}</h6>
          </p>

          <div className='boxtx3 d-flex justify-content-around' style={{ color: "#696f87" }}>
            <p><i class="fa-solid fa-bed pe-3"></i>{beds}</p>
            <p><i class="fa-solid fa-bath pe-3"></i>{baths}</p>
            <p><i class="fa-regular fa-square pe-3"></i>{area}</p>
          </div>

          <a href="#" className="btn border border-2 w-100 "><i class="fa-regular fa-eye mx-2"></i>View Details</a>
        </div>
      </div>
  );
}

export default Propartycard;

