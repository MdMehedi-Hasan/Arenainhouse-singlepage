import React from 'react';
import img1 from './Assets/Team/1.png'
import img2 from './Assets/Team/2.png'
import img3 from './Assets/Team/3.png'
import img4 from './Assets/Team/4.png'
import './Team.css'

const Team = () => {
    return (
        <section className='flex justify-center py-20'>
            <div>
                <h1 className='text-center text-5xl font-semibold'>Traineer's Portfolio</h1>
                <p className='text-center text-xl mt-3 mb-10'>Hands-on training from country top rated hackers</p>
                <div className='container max-w-4xl grid grid-cols-3 gap-y-10 gap-x-10 justify-items-center'>
                    <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" className='max-w-xs relative shadow-2xl shadow-slate-400 bg-gray-50'>{/* shadow-[-20px_-20px_20px_17px_green;] */}
                        <img width="100%" src={img1} alt="Tanjim Al Fahim" />
                        <div className='p-5'>
                            <h1 className='text-2xl'>Tanjim Al Fahim</h1>
                            <p className='text-sm font-semibold mt-1 mb-3'>Founder & CEO</p>
                            <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" className='max-w-xs relative shadow-2xl shadow-slate-400'>
                        <img width="100%" src={img2} alt="Tanjim Al Fahim" />
                        <div className='p-5 bg-gray-50'>
                            <h1 className='text-2xl'>Ashif Islam</h1>
                            <p className='text-sm font-semibold mt-1 mb-3'>Traineer</p>
                            <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" className='max-w-xs relative shadow-2xl shadow-slate-400'>
                        <img width="100%" src={img3} alt="Tanjim Al Fahim" />
                        <div className='p-5 bg-gray-50'>
                            <h1 className='text-2xl'>Md Abdullah</h1>
                            <p className='text-sm font-semibold mt-1 mb-3'>Traineer</p>
                            <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" className='max-w-xs relative shadow-2xl shadow-slate-400'>
                        <img width="100%" src={img3} alt="Tanjim Al Fahim" />
                        <div className='p-5 bg-gray-50'>
                            <h1 className='text-2xl'>Md Abdullah</h1>
                            <p className='text-sm font-semibold mt-1 mb-3'>Traineer</p>
                            <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" className='max-w-xs relative shadow-2xl shadow-slate-400'>
                        <img width="100%" src={img4} alt="Tanjim Al Fahim" />
                        <div className='p-5 bg-gray-50'>
                            <h1 className='text-2xl'>Aminul Haque</h1>
                            <p className='text-sm font-semibold mt-1 mb-3'>Traineer</p>
                            <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" className='max-w-xs relative shadow-2xl shadow-slate-400 bg-gray-50'>{/* shadow-[-20px_-20px_20px_17px_green;] */}
                        <img width="100%" src={img1} alt="Tanjim Al Fahim" />
                        <div className='p-5'>
                            <h1 className='text-2xl'>Tanjim Al Fahim</h1>
                            <p className='text-sm font-semibold mt-1 mb-3'>Founder & CEO</p>
                            <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;