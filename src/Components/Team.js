import React from 'react';
import img1 from './Assets/Team/1.png'
import img2 from './Assets/Team/2.png'
import img3 from './Assets/Team/3.png'
import img4 from './Assets/Team/4.png'
import './Team.css'

const Team = () => {
    return (
        <section className='flex justify-center'>
            <div className='container grid grid-cols-2 justify-items-center'>
                <div className='max-w-lg'>
                    <img src={img1} alt="Tanjim Al Fahim" />
                    <h1 className='text-2xl font-semibold'>Tanjim Al Fahim</h1>
                    <p className='text-sm font-semibold'>Founder & CEO</p>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </div>
                <div className='max-w-lg'>
                    <img src={img2} alt="Tanjim Al Fahim" />
                    <h1 className='text-2xl font-semibold'>Anisul Haque</h1>
                    <p className='text-sm font-semibold'>Traineer</p>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </div>
                <div className='max-w-lg'>
                    <img src={img3} alt="Tanjim Al Fahim" />
                    <h1 className='text-2xl font-semibold'>Mohammad Abdullah</h1>
                    <p className='text-sm font-semibold'>Traineer</p>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </div>
                <div className='max-w-lg'>
                    <img src={img4} alt="Tanjim Al Fahim" />
                    <h1 className='text-2xl font-semibold'>Seikh Fazle Rabbi</h1>
                    <p className='text-sm font-semibold'>Traineer</p>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </div>
            </div>
        </section>
    );
};

export default Team;