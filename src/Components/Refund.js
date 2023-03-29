import React from 'react';
import refund from './Assets/refund2.png'

const Refund = () => {
    return (
        <section className='flex justify-center bg-gray-50'>
            <div className='container flex items-center justify-between'>
            <h1 className='ml-20 text-4xl font-semibold'>14 Days Money-Back Guranteed</h1>
            <img src={refund} alt="" className='w-4/12'/>
            </div>
        </section>
    );
};

export default Refund;