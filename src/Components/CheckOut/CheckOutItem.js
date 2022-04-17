import React from 'react';

const CheckOutItem = (props) => {
    const{card} = props
    

    
    return (
        <div>
            <h1 className='text-center text-light p-5'>Check-out</h1>
            <h3 className='p-4 text-light'>Length:{card.length}</h3>
            <h3 className='p-4 text-light'>Name:{card.name}</h3>
        </div>
    );
};

export default CheckOutItem;