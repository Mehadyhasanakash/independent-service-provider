import React from 'react';
import image from '../../image/Mehady Hasan Akash.png'

const About = () => {
    return (
        <div className='container '>

            <div className='row d-flex align-items-center justify-content-center'>
                <div className='col col-md-7 mt-2'>
                    <img className='img-fluid img-thumbnail' src={image} alt="" />

                </div>

               

            </div>
            <div className='row d-flex justify-content-center align-items-center'>
            <div className=' col col-md-10 mt-3 '>
                    <p>হ্যালো আমার নাম মেহেদী হাসান আকাশ। আমি চট্টগ্রামে বসবাস করি। আমি বর্তমানে (কম্পিউটার এন্ড প্রিন্টিং প্রেস) দোকানে গ্রাফিক ডিজাইনার হিসাবে কাজ করি। <span className='text-success'>
                         আমার কাজের ধরনগুলো হল: লোগো ডিজাইন, ব্যনার , পোষ্টার, ভিজিটিং কার্ড, বিয়ের কার্ড ইত্যাদি কাজ করে থাকি। কিন্তু আমার স্বপ্ন আমি একজন ওয়েব ডেপোলাপার হব। সেজন্য আমার প্রোগ্রামিং হিরোর এই কোর্সটাতে ভর্তি হওয়া।</span> </p>
                </div>
            </div>
            
        </div>
    );
};

export default About;