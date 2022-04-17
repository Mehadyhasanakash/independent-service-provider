import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div>
            <div className='row mt-5'>
                <h4 className='text-light text-center p-5 bg-danger'>Copy right @{year}</h4>
            </div>
        </div>
    );
};

export default Footer;