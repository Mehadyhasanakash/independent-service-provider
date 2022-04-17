import React from 'react';
import usePhotographry from '../../useHook/useHook';
import DisplayCheckOut from './DisplayChecOut';

const CheckOut = () => {

    const [photos] = usePhotographry()



    return (
        <div className='container mt-5'>
            <div className='row'>

                <div className='col col-md-8'>
                    <div className='row row-cols-1 row-cols-md-2 g-5 mx-auto'>
                        {
                            photos.map(photo => <DisplayCheckOut
                            
                            key={photo.id}
                            photo={photo}
                            
                            ></DisplayCheckOut>)
                        }
                    </div>
                </div>
                <div className='col col-md-4 bg-danger'>
                        
                </div>

            </div>
        </div>
    );
};

export default CheckOut;