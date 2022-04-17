import React from 'react';
import usePhotographry from '../../../useHook/useHook';
import DisplayService from './DisplayService';

const Service = () => {

    const [photos] = usePhotographry()
   
    return (
        <div className='container'>
            <div className='row'>
                <div className='row row-cols-1 row-cols-md-3 g-4 mx-auto'>
                    {
                        photos.map(photo => <DisplayService
                        
                        key={photo.id}
                        photo ={photo}
                        ></DisplayService>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Service;