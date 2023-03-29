import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import video from "./Assets/movie1.mp4";
import './Video.css'

const Video = () => {
    /* useEffect(() => {
        const videoDiv = document.getElementById('vid')
        videoDiv.autoplay = true;
        videoDiv.muted = false
        videoDiv.load();
    }, []) */
    return (
        <section className="bg-image text-white h-max flex items-center py-20"> {/* bg-image text-white */}
            {/* <Parallax className='mx-auto' speed={-50}> */}
            <div className='container mx-auto grid grid-cols-2 justify-between items-center gap-x-20'>
                <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="3000" className='relative'>
                    {/* <iframe src="https://www.youtube.com/embed/9y927xiDtJo?autoplay=1&mute=1" title="Arena Course Details" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen autoPlay className=''></iframe> */}
                    <p className='bg-red-600 text-white flex items-center justify-center py-3 text-xl'><Icon icon="charm:sound-up" /> &nbsp; Make Sure Your Sound Is Turned On!</p>
                    <video controls autoPlay muted>
                        <source src={video} type="video/mp4" />
                        <source src={video} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                {/* <Icon icon="noto:backhand-index-pointing-right" className='absolute left-full top-1/4 text-6xl'/> */}
                </div>
                {/* <img src={test} alt=""/> */}
                <div className=''>
                    <h1 className="text-5xl">Cyber Security & Ethical Hacking <sub className='text-md'>(Bundle Course)</sub></h1> {/* data-aos="zoom-in" data-aos-delay="0" data-aos-duration="3000" */}
                    <h3 className="text-xl mt-7 mb-5">Key Topics</h3> {/* data-aos="fade-right" data-aos-delay="100" data-aos-duration="3000" */} {/* data-aos="zoom-in" data-aos-delay="100" data-aos-duration="3000" */}
                    {/* <p  className="font-['Cormorant_Garamond'] text-2xl mt-10 text-justify">Arena Web Security is a sister concern of Arena Web Technology. Arena Web Security is a renowned IT security company in Bangladesh since its establishment in 2012. During these years, Arena Web Security has provided Cyber Security Services and Trainings to many around the world. <br /> <br />
                            Involved with Government entities in 2012 like ICT Ministry, Academy for Rural Development, University of Engineering and Technology. Experienced with cyber security support in corporate area linked with outsourcing market. Already 43 batches received this training and have started to earn through online and corporate job.</p> */}
                    <div className='flex flex-col gap-5'>
                        <div className='w-1/2 border rounded-lg text-2xl py-3 pl-8 shadow-xl'><p>Cyber Security</p></div>
                        <div className='w-1/2 border rounded-lg text-2xl py-3 pl-8 shadow-xl'><p>Ethical Hacking</p></div>
                        <div className='w-1/2 border rounded-lg text-2xl py-3 pl-8 shadow-xl'><p>Freelancing</p></div>
                        <div className='w-1/2 border rounded-lg text-2xl py-3 pl-8 shadow-xl'><p>Linux</p></div>
                        <div className='w-1/2 border rounded-lg text-2xl py-3 pl-8 shadow-xl'><p>Digital Forensic</p></div>
                        {/* <div className='w-1/2 border rounded-lg text-2xl py-3 pl-8 shadow-xl'><p>Open Source Intelligence</p></div> */}
                        {/* <div className='w-1/2 border rounded-lg text-2xl py-3 pl-8 shadow-xl'><p>ABCD</p></div> */}
                    </div>
                </div>
                <a href="https://arenawebsecurity.net/admission" className='text-center mt-3'><button type="" className="btn btn-warning btn-animate text-4xl h-auto py-3 font-['Lateef'] normal-case shadow-[0px_0px_10px_10px_#ffffff5c] font-normal w-full text-white">Enroll Now &nbsp; <span className='border-2 border-white rounded-full text-white'><Icon icon="ic:outline-keyboard-double-arrow-right" /></span></button></a>
                {/* <a href="https://arenawebsecurity.net/admission" className='mt-5'><button type="" className="btn btn-warning btn-animate text-4xl h-auto py-3 font-['Lateef'] normal-case shadow-[0px_0px_10px_10px_#ffffff5c] font-normal w-1/2 text-white">Enroll Now &nbsp; <span className='border-2 border-white rounded-full text-white'><Icon icon="ic:outline-keyboard-double-arrow-right" /></span></button></a> */}
                <div className='w-1/2 border rounded-lg text-2xl py-3 pl-8 shadow-xl mt-5'><p>Open Source Intelligence</p></div>
            </div>
            {/* </Parallax> */}
        </section>
    );
};

export default Video;