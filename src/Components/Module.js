import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import module1 from './Assets/cyber-security-course-outline/cyber-security1.svg'
import module2 from './Assets/cyber-security-course-outline/cyber-security2.svg'
import module3 from './Assets/cyber-security-course-outline/cyber-security3.svg'
import module4 from './Assets/cyber-security-course-outline/cyber-security4.svg'
import module5 from './Assets/cyber-security-course-outline/cyber-security5.svg'
import downArrow from './Assets/Shapes/down2.png'
import "react-image-lightbox/style.css";
import { Icon } from '@iconify/react';

const Module = () => {
    const [open, setOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const images = [
        'https://arenawebsecurity.net/static/media/cyber-security1.svg',
        'https://arenawebsecurity.net/static/media/cyber-security2.svg',
        'https://arenawebsecurity.net/static/media/cyber-security3.svg',
        'https://arenawebsecurity.net/static/media/cyber-security4.svg',
        'https://arenawebsecurity.net/static/media/cyber-security5.svg',
        'https://arenawebsecurity.net/static/media/cyber-security6.svg'
      ];
    return (
        <div className='py-14 relative bg-circle'>
            <img src={downArrow} alt="" className='absolute top-[-65px] right-[45%] left-[55%] rotate-45 w-24'/>
            <h1 className='text-center text-8xl mb-20'>Modules List</h1>
            <div className='container mx-auto flex flex-wrap justify-center'>
                <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
                <img className='border border-sky-200 LightImgPreview' src={module1} alt="module_img_1" onClick={()=>setOpen(true)}/>
                </div>
                <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
                <img className='border border-sky-200 LightImgPreview' src={module2} alt="module_img_2" onClick={()=>setOpen(true)}/>
                </div>
                <div data-aos="flip-right" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
                <img className='border border-sky-200 LightImgPreview' src={module3} alt="module_img_3" onClick={()=>setOpen(true)}/>
                </div>
                <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
                <img className='border border-sky-200 LightImgPreview' src={module4} alt="module_img_4" onClick={()=>setOpen(true)}/>
                </div>
                <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
                <img className='border border-sky-200 LightImgPreview' src={module5} alt="module_img_5" onClick={()=>setOpen(true)}/>
                </div>
                <div data-aos="flip-right" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
                <img className='border border-sky-200 LightImgPreview' src={module5} alt="module_img_5" onClick={()=>setOpen(true)}/>
                </div>
            </div>

            {open && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex(
                            (photoIndex + 1) % images.length
                        )
                    }
                />
            )}
            <a href="https://arenawebsecurity.net/admission" className='flex justify-center'><button type="" className="btn btn-warning btn-animate w-2/6 mt-3 text-4xl h-auto py-5 font-serif normal-case shadow-[0px_0px_10px_10px_#ffffff5c] font-normal">Interested? <br /> Join The Course</button></a>
        </div>
    );
};

export default Module;