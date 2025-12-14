import React from 'react';
import "./search.css";

const Search = () => {
    return (
        <div>
            <div className='calbox d-flex flex-column justify-content-center align-items-center text-center mt-4'>
                <div className='calbox1 text-white'>
                    <h4>Ready to Find Your Home?</h4>
                    <p>Get in touch with our experts toda</p>

                    <div class="calbtn2 d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column gap-2">
                        <button type="button" className='calbtn w-50 h-25 border rounded-1' style={{color: "#0b1c40"}}><i class="fa-solid fa-phone pe-4 py-2"></i>Call Now</button>
                        <button type="button" className='calbtn w-50 h-25 border rounded-1' style={{color: "#0b1c40"}}><i class="fa-regular fa-envelope pe-4 py-2"></i>Get Quote</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
