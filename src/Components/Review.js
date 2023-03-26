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
                <a href="https://arenawebsecurity.net/admission" className='mt-20 flex justify-center'><button type="" className="btn btn-warning btn-animate text-4xl h-auto w-1/2 py-5 font-['Lateef'] normal-case shadow-[0px_0px_10px_10px_#ffffff5c] font-normal">You can be the next cyber expert. <br /> Enroll Now! </button></a>
            </div>
        </section>
    );
};

export default Review;