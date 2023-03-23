import React from 'react';
import img1 from './Assets/Team/1.png'
import img2 from './Assets/Team/2.png'
import img3 from './Assets/Team/3.png'
import img4 from './Assets/Team/4.png'
import './Team.css'

const Team = () => {
    return (
        <section className='flex justify-center py-20'>
            <div className='container grid grid-cols-2 gap-y-20 justify-items-center'>
                <div className='max-w-lg shadow-[-20px_-20px_20px_17px_green;]'>
                    <img width="100%" src={img1} alt="Tanjim Al Fahim" />
                    <div className='p-5 bg-gray-50'>
                        <h1 className='text-2xl font-semibold'>Tanjim Al Fahim</h1>
                        <p className='text-sm font-semibold mt-1 mb-3'>Founder & CEO</p>
                        <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                </div>
                <div className='max-w-lg shadow-[-20px_-20px_20px_17px_green;]'>
                    <img width="100%" src={img2} alt="Tanjim Al Fahim" />
                    <div className='p-5 bg-gray-50'>
                        <h1 className='text-2xl font-semibold'>Anisul Haque</h1>
                        <p className='text-sm font-semibold mt-1 mb-3'>Traineer</p>
                        <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                </div>
                <div className='max-w-lg shadow-[-20px_-20px_20px_17px_green;]'>
                    <img width="100%" src={img3} alt="Tanjim Al Fahim" />
                    <div className='p-5 bg-gray-50'>
                        <h1 className='text-2xl font-semibold'>Mohammad Abdullah</h1>
                        <p className='text-sm font-semibold mt-1 mb-3'>Traineer</p>
                        <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                </div>
                <div className='max-w-lg shadow-[-20px_-20px_20px_17px_green;]'>
                    <img width="100%" src={img4} alt="Tanjim Al Fahim" />
                    <div className='p-5 bg-gray-50'>
                        <h1 className='text-2xl font-semibold'>Seikh Fazle Rabbi</h1>
                        <p className='text-sm font-semibold mt-1 mb-3'>Traineer</p>
                        <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;