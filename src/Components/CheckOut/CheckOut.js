import React, { useState } from 'react';
import usePhotographry from '../../useHook/useHook';
import CheckOutItem from './CheckOutItem';
import DisplayCheckOut from './DisplayChecOut';

const CheckOut = () => {

    const [photos] = usePhotographry()
    const [card, setCard] = useState([])

    const hendalClick =(selectItem) =>{
        const newItem =[...card, selectItem]
        setCard(newItem)
    }



    return (
        <div className='container mt-5'>
            <div className='row'>

                <div className='col col-md-8'>
                    <div className='row row-cols-1 row-cols-md-2 g-5 mx-auto'>
                        {
                            photos.map(photo => <DisplayCheckOut
                            
                            key={photo.id}
                            photo={photo}
                            hendalClick={hendalClick}
                            
                            ></DisplayCheckOut>)
                        }
                    </div>
                </div>
                <div className='col col-md-4 bg-danger'>
                      <CheckOutItem card={card}> </CheckOutItem>  
                </div>

            </div>
        </div>
    );
};

export default CheckOut;