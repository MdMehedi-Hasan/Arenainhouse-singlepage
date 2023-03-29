import React from 'react';
import refund from './Assets/refund.png'

const Refund = () => {
    return (
        <section className='flex justify-center bg-gray-100 py-5'>
            <div className='container flex items-center justify-between'>
            <h1 className='ml-20 text-4xl font-semibold'>14 Days Easy Refund Policy</h1>
            <img src={refund} alt="" className='w-2/12'/>
            </div>
        </section>
    );
};

export default Refund;