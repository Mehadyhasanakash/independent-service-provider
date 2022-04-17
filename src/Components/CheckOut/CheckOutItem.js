import React from 'react';

const CheckOutItem = ({card}) => {
    return (
        <div>
            <h1 className='text-center text-light p-5'>Check-out</h1>
            <h3 className='p-4 text-light'>Name:{card.length}</h3>
        </div>
    );
};

export default CheckOutItem;