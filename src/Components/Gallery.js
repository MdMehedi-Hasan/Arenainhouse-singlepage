import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import img1 from './Assets/gallery/1.png'
import img2 from './Assets/gallery/2.png'
import img3 from './Assets/gallery/3.png'
import img4 from './Assets/gallery/4.png'
import img5 from './Assets/gallery/5.png'
import img6 from './Assets/gallery/6.png'
import img7 from './Assets/gallery/7.webp'
import './Gallery.css'

const Gallery = () => {
    const [open, setOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const images = [img1,img2,img3,img4,img5,img6,img7];
    return (
        <section className='flex flex-col items-center relative py-40'>
            {/* <div className='container grid grid-cols-2'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div> */}
            <h1 className='text-center text-6xl mb-32'>Some of Our Memorable Moments</h1>
            <div className='circle-1'></div>
            <div className='circle-2'></div>
            <div className='container flex flex-wrap justify-center'>
                <div className='w-2/5 cursor-pointer'>
                <img src={img1} alt="" onClick={()=>setOpen(true)}/>
                </div>
                <div className='w-2/5 cursor-pointer'>
                <img src={img2} alt="" onClick={()=>setOpen(true)}/>
                </div>
                <div className='w-1/3 cursor-pointer'>
                <img src={img3} alt="" onClick={()=>setOpen(true)}/>
                </div>
                <div className='w-1/3 cursor-pointer'>
                <img src={img4} alt="" onClick={()=>setOpen(true)}/>
                </div>
                <div className='w-1/3 cursor-pointer'>
                <img src={img5} alt="" onClick={()=>setOpen(true)}/>
                </div>
                <div className='w-2/5 cursor-pointer'>
                <img src={img6} alt="" onClick={()=>setOpen(true)}/>
                </div>
                <div className='w-2/5 cursor-pointer'>
                <img src={img7} alt="" onClick={()=>setOpen(true)}/>
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
            <a href="https://arenawebsecurity.net/admission"><button type="link" className="mx-auto btn btn-warning btn-animate text-4xl h-auto py-5 mt-20 font-bold normal-case shadow-[0px_0px_10px_10px_#e7e7e770] font-normal w-auto">If you Want To See Yourself Here. Then <br /> Join Our Course Now! </button></a>
        </section>
    );
};

export default Gallery;