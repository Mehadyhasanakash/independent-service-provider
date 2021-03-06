import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Service from './Service/Service';

const Home = () => {
    return (
        <div className='bg-light'>
           <Banner></Banner> 
           <Service></Service>
           <Footer></Footer>
        </div>
    );
};

export default Home;