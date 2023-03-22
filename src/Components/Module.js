import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import module1 from './Assets/cyber-security-course-outline/cyber-security1.svg'
import module2 from './Assets/cyber-security-course-outline/cyber-security2.svg'
import module3 from './Assets/cyber-security-course-outline/cyber-security3.svg'
import module4 from './Assets/cyber-security-course-outline/cyber-security4.svg'
import module5 from './Assets/cyber-security-course-outline/cyber-security5.svg'
import "react-image-lightbox/style.css";

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
        <div>
            <div className='container mx-auto flex flex-wrap justify-center'>
                <div className='w-1/3 p-5'>
                <img className='border border-sky-200 LightImgPreview' src={module1} alt="module_img_1" onClick={()=>setOpen(true)}/>
                </div>
                <div className='w-1/3 p-5'>
                <img className='border border-sky-200 LightImgPreview' src={module2} alt="module_img_2" onClick={()=>setOpen(true)}/>
                </div>
                <div className='w-1/3 p-5'>
                <img className='border border-sky-200 LightImgPreview' src={module3} alt="module_img_3" onClick={()=>setOpen(true)}/>
                </div>
                <div className='w-1/3 p-5'>
                <img className='border border-sky-200 LightImgPreview' src={module4} alt="module_img_4" onClick={()=>setOpen(true)}/>
                </div>
                <div className='w-1/3 p-5'>
                <img className='border border-sky-200 LightImgPreview' src={module5} alt="module_img_5" onClick={()=>setOpen(true)}/>
                </div>
                <div className='w-1/3 p-5'>
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
        </div>
    );
};

export default Module;