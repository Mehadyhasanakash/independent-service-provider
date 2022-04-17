import React from 'react';
import Banner from './Banner/Banner';
import Service from './Service/Service';

const Home = () => {
    return (
        <div className='bg-light'>
           <Banner></Banner> 
           <Service></Service>
        </div>
    );
};

export default Home;