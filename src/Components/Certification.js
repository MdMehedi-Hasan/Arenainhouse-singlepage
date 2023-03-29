import React from 'react';
import certification from './Assets/winner.png'
import './Certification.css'

const Certification = () => {
    return (
        <section className='flex justify-center text-white test2 my-10'>
            <div className='container flex flex-col items-center py-10'>
            <img src={certification} alt="Certification" className='w-1/12'/>
            <h1 className='text-4xl font-semibold mt-4 mb-3'>Certification</h1>
            <p className='text-2xl'>Certified by Bangladesh Institute of Cyber Security</p>
            </div>
        </section>
    );
};

export default Certification;