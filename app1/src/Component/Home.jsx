import React from 'react';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div className='img'>
                <div className="imgtext">
                    <h2 id='textclr'>Find Your</h2>
                    <h2 id='textclr1'>Dream Home</h2>
                    <p>Discover premium properties in prime locations across India</p>

                    <div className='imgbox d-flex flex-lg-row flex-md-row flex-column h-auto p-2 gap-3 rounded-2'>
                        <input class="form-control w-sm-100" type="search" placeholder="Search by location, project, or builder..." aria-label="Search" />
                        <div class="dropdown">
                            <button class="imgbtn1 btn-secondary dropdown-toggle border border-2 bg-white rounded-2 gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">Plot</button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Apartment</a></li>
                            <li><a class="dropdown-item" href="#">Villa</a></li>
                            <li><a class="dropdown-item" href="#">Plot</a></li>
                            <li><a class="dropdown-item" href="#">Commercial</a></li>
                            </ul>
                        </div>
                    <button type="button" class="imgbtn" style={{ backgroundColor: ' #0b1c40' }}>Search</button>
                </div>
            </div>
        </div>
        </div >
    );
}

export default Home;
