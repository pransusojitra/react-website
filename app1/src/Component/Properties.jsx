import React from 'react';
import "./Properties.css";
import Propartycard from './Propartycard';
import img1 from "../assets/photo1.jpeg"
import img2 from "../assets/photo2.jpeg"
import img3 from "../assets/photo3.jpeg"
import img4 from "../assets/studio.jpeg"
import img5 from "../assets/spacfic.jpeg"
import img6 from "../assets/comer.jpeg"


const Properties = () => {
  return (
    <div>
      <div className='property'>
        <div className='propertytx mt-4 m-5'>
          <h2><b>Find Your Perfect Property</b></h2>
          <p>Browse through 6 premium properties</p>
        </div>

        <div className='d-flex justify-content-center mt-5 p-2'>
          <div className='propertybx d-flex flex-lg-row flex-md-row flex-column p-2 gap-3 border border-2 rounded-2 h-auto w-100 w-lg-75'>

            <input className="propertybx1 border border-1 rounded-2 w-lg-75 w-100" type="search" placeholder="Search by location, type, or keyword..." aria-label="Search" style={{ height: "50px" }} />

            <div className="propertybx2">
              <select className="propertybx3 bg-white border border-1 rounded-2 w-100" style={{ minWidth: "180px", height: "50px" }}>
                <option>All Types</option>
                <option>Plot</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Commercial</option>
              </select>
            </div>

            <div className="propertybx3">
              <select className="propertybx4 bg-white border border-1 rounded-2 w-100" style={{ minWidth: "180px", height: "50px" }}>
                <option>For Sale/Rant</option>
                <option>All</option>
                <option>For Sale</option>
                <option>Villa</option>
                <option>For Rant</option>
              </select>
            </div>

            <button type="button" className="propertybx5 text-white border border-1 rounded-2 " style={{ backgroundColor: ' #0b1c40', minWidth: "180px", height: "50px" }}>Search</button>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">

          <div className="col-4 d-lg-block d-md-block d-none">
            <div className="propertyrng border border-2 mt-3 p-2 h-auto">

              <div className='propertyrng1 d-flex flex-column gap-2 p-3'>
                <h4 >Filters</h4>
                <label for="range1" className="form-label fw-semibold">Price Range</label>
                <input type="range" className="form-range" id="range1"></input>
              </div>


              <div className='propertyrng2 p-3'>
                <p className="fw-semibold mb-2">Property Type</p>
                <div className="form-check d-flex flex-column">
                  <label><input type="checkbox" /> Apartment</label>
                  <label><input type="checkbox" /> Villa</label>
                  <label><input type="checkbox" /> Plot</label>
                  <label><input type="checkbox" /> Commercial</label>
                </div>
              </div>

              <div className='propertyrng3 p-3 '>
                <h6 className="fw-semibold">BHK</h6>
                <div className='bhkbx d-flex flex-wrap gap-2 pt-1'>
                  <button type="button" className="btn border border-1 rounded-2">1 BHK</button>
                  <button type="button" className="btn border border-1 rounded-2">2 BHK</button>
                  <button type="button" className="btn border border-1 rounded-2">3 BHK</button>
                  <button type="button" className="btn border border-1 rounded-2">4 BHK</button>
                  <button type="button" className="btn border border-1 rounded-2">5+ BHK</button>
                </div>
              </div>

              <div className='propertyrng4 p-3'>
                <p className="fw-semibold mb-2">Amenities</p>
                <div className="form-check d-flex flex-column gap-1">
                  <label><input type="checkbox" />  Parking</label>
                  <label><input type="checkbox" /> Swimming Pool</label>
                  <label><input type="checkbox" /> Gym</label>
                  <label><input type="checkbox" /> Garden</label>
                  <label><input type="checkbox" /> Security</label>
                </div>
              </div>

              <div className='propertybtn p-3'>
                <button type="button" className="propertybtn1 text-white border border-1 rounded-2 w-100 text-center" style={{ background: "#0b1c40", height: "40px" }}>Large button</button>
              </div>
            </div>
          </div>


          <div className="col-12 d-lg-none d-md-none d-block">

            <div className="propertyrng border border-2  mt-3 p-2 h-auto">
              <div className='propertyrng1 d-flex align-items-center justify-content-between'>
                <h4 >Filters</h4>
                <i class="fa-solid fa-bars"></i>
              </div>
            </div>
            <div className='propertytx1 d-flex flex-row mt-3 gap-2 justify-content-center'>
              <p>Showing 6 Properties</p>
              <h6 className='propertytx2 border border-1 rounded-pill d-flex align-items-center justify-content-center' style={{ width: "80px" }}>Featured</h6>
              <h6 className='propertytx2 border border-1 rounded-pill d-flex align-items-center justify-content-center' style={{ width: "60px" }}>New</h6>

              <div className="propertybx2">
                <select className="propertybx3 bg-white border border-1 rounded-2 w-100" style={{ height: "40px" }}>
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High Low to</option>
                  <option>Area:Large to small</option>
                </select>
              </div>
            </div>
          </div>


          <div className="col-lg-8 col-md-8 col-12">

            <div className='box1 d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column gap-4 w-100 mt-3'>
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

            <div className='box2 d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column gap-4 w-100 mt-3'>
              <Propartycard
                img={img4}
                title="Studio"
                price="₹25,000/month"
                location="Koramangala, Bangalore"
                beds="1 Beds"
                baths="1 Baths"
                area="650 sq ft"
              />
              <Propartycard
                img={img5}
                title="Spacious Family Home"
                price="₹1.8 Cr"
                location="Sector 47, Noida"
                beds="4 Beds"
                baths="3 Baths"
                area="2,200 sq ft"
              />
              <Propartycard
                img={img6}
                title="Commercial..."
                price="₹85,000/month"
                location="Cyber City, Gurgaon"
                beds="0 Beds"
                baths="2 Baths"
                area="1,500 sq ft"
              />
            </div>

            <div className='numberbx'>
              <div className="numberbx d-flex justify-content-center mt-5">
                <ul className="pagination gap-2">
                  <li className="page-item"><a className="page-link border border-1 rounded-2 text-black" href="#"> Previous</a></li>
                  <li className="page-item"><a className="page-link border border-1 rounded-2 text-white" href="#" style={{ backgroundColor: "#0b1c40" }}>1</a></li>
                  <li className="page-item"><a className="page-link border border-1 rounded-2 text-black" href="#">2</a></li>
                  <li className="page-item"><a className="page-link border border-1 rounded-2 text-black" href="#">3</a></li>
                  <li className="page-item"><a className="page-link border border-1 rounded-2 text-black" href="#"> Next</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default Properties;
