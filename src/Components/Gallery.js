import React from 'react';
import img1 from './Assets/gallery/1.png'
import img2 from './Assets/gallery/2.png'
import img3 from './Assets/gallery/3.png'
import img4 from './Assets/gallery/4.png'
import img5 from './Assets/gallery/5.png'
import img6 from './Assets/gallery/6.png'

const Gallery = () => {
    return (
        <section className='flex justify-center'>
            <div className='container grid grid-cols-2'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>
        </section>
    );
};

export default Gallery;