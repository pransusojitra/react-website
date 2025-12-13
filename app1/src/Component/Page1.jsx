import React from 'react'
import "./Page1.css";
const Page1 = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div className='navicon'><i class="fa-regular fa-house"></i></div>
                    <a class="navbar-brand" href="#">EliteHomes</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link" href="#">Home</a>
                            <a class="nav-link" href="#">Properties</a>
                            <a class="nav-link" href="#">Projects</a>
                            <a class="nav-link" href="#">About</a>
                            <a class="nav-link" href="#">Blog</a>
                            <a class="nav-link" href="#">Contact</a>
                            <a class="nav-link d-lg-block d-md-block d-none" href="#">
                                <button type="button" class="btn btn-light border border-1 d-flex align-item-center justify-content-cemter">List Property</button>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Page1
