import React from 'react'
import { Link } from 'react-router-dom'
import "./Page1.css";
const Page1 = () => {
    return (
        <div className='position-sticky top-0' style={{ zIndex: "999" }}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm ">
                <div className="container-fluid">
                    <div className='navicon d-flex gap-2 align-items-center justify-content-center'>
                        <i className="fa-regular fa-house" id='hm'></i>
                        <a className="navbar-brand fs-4" href="/"><b>EliteHomes</b></a>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
                            <Link to="/" className='nav-link'>
                                <p className="nav-link">Home</p>
                            </Link>

                            <Link to="/Properties" className='nav-link'>
                                <p className="nav-link">Properties</p>
                            </Link>

                            <Link to="/Project" className='nav-link'>
                                <p className="nav-link">Projects</p>
                            </Link>

                            <Link to="/About" className='nav-link'>
                                <p className="nav-link">About</p>
                            </Link>

                            <Link to="/Blog" className='nav-link'>
                                <p className="nav-link">Blog</p>
                            </Link>

                            <Link to="/Contact" className='nav-link'>
                                <p className="nav-link">Contact</p>
                            </Link>

                            <div className="ms-lg-3 d-flex align-items-center justify-content-center">
                                <button type="button" className="btn border border-1 px-3 w-100">List Property</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
}


export default Page1;
