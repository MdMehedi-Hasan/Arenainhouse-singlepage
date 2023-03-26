import React from 'react';
import review from './Assets/review.svg'
import './Video.css'

const Review = () => {
    return (
        <section className='flex justify-center py-20 bg-circle'>
            <div className='container'>
                <h1 className='text-center text-6xl font-bold py-10 mb-20'>Here's what others have to Say...</h1>
                <div className='flex justify-center'>
                    <img src={review} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Review;