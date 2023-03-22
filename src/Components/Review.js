import React from 'react';
import review from './Assets/review.svg'

const Review = () => {
    return (
        <section className='flex justify-center bg-[#cfcfcf4d] py-20'>
            <div className='container'>
                <h1 className='text-center text-6xl font-bold font-mono py-10 mb-20'>Here's what others have to Say...</h1>
                <div className='flex justify-center'>
                    <img src={review} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Review;