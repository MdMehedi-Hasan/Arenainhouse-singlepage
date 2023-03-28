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
        <section className="py-32 bg-image text-white h-screen flex items-center"> {/* bg-image text-white */}
            {/* <Parallax className='mx-auto' speed={-50}> */}
            <div className='container mx-auto grid grid-cols-2 justify-between items-center gap-x-20'>
                <div>
                    {/* <iframe src="https://www.youtube.com/embed/9y927xiDtJo?autoplay=1&mute=1" title="Arena Course Details" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen autoPlay className=''></iframe> */}
                    <video id='vid' data-aos="fade-right" data-aos-delay="100" data-aos-duration="3000" controls autoPlay muted>
                        <source src={video} type="video/mp4" />
                        <source src={video} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                {/* <img src={test} alt=""/> */}
                <div className=''>
                    <h1 className="font-['Yeseva_One'] text-7xl">Arena Web Security</h1> {/* data-aos="zoom-in" data-aos-delay="0" data-aos-duration="3000" */}
                    <h3 className="font-['Dancing_Script'] text-3xl">New Window of World Wide Web</h3> {/* data-aos="fade-right" data-aos-delay="100" data-aos-duration="3000" */} {/* data-aos="zoom-in" data-aos-delay="100" data-aos-duration="3000" */}
                    {/* <p  className="font-['Cormorant_Garamond'] text-2xl mt-10 text-justify">Arena Web Security is a sister concern of Arena Web Technology. Arena Web Security is a renowned IT security company in Bangladesh since its establishment in 2012. During these years, Arena Web Security has provided Cyber Security Services and Trainings to many around the world. <br /> <br />
                            Involved with Government entities in 2012 like ICT Ministry, Academy for Rural Development, University of Engineering and Technology. Experienced with cyber security support in corporate area linked with outsourcing market. Already 43 batches received this training and have started to earn through online and corporate job.</p> */}
                    <div className='flex flex-col gap-5 mt-10'>
                        <div className='w-1/2 border rounded-lg text-2xl py-3 pl-8'><p>Cyber Security</p></div>
                        <div className='w-1/2 border rounded-lg text-2xl py-3 pl-8'><p>Linux</p></div>
                        <div className='w-1/2 border rounded-lg text-2xl py-3 pl-8'><p>Digital Forensic</p></div>
                        <div className='w-1/2 border rounded-lg text-2xl py-3 pl-8'><p>Open Source Intelligence</p></div>
                        <div className='w-1/2 border rounded-lg text-2xl py-3 pl-8'><p>Freelancing</p></div>
                    </div>
                </div>
                <a href="https://arenawebsecurity.net/admission" className='text-center'><button type="" className="btn btn-warning btn-animate text-4xl h-auto py-5 font-['Lateef'] normal-case shadow-[0px_0px_10px_10px_#ffffff5c] font-normal w-full">Enroll Now </button></a>
            </div>
            {/* </Parallax> */}
        </section>
    );
};

export default Video;