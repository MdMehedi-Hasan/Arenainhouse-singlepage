import React from 'react';
import test from './Assets/AWSCourse.webp'
import hackerImg from './Assets/hacker.png'

const About = () => {
    return (
        <section className='relative py-5 bg-circle'>
            {/* <div className='h-full w-full absolute flex justify-center items-center opacity-5'>
            <img src={hackerImg} alt="" className='z-50'/>
            </div> */}
            <h1 className='text-center text-8xl mb-32'>About Us</h1>
            <div className='container mx-auto flex gap-20'>
                <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="2000">
                    <img src={test} alt="" width="" />
                </div>
                <div className='flex flex-col justify-between'>
                    <p data-aos="zoom-in" data-aos-delay="50" data-aos-duration="2000" className="text-justify text-lg font-['Libre-Baskerville']">Arena Web Security is a sister concern of Arena Web Technology. Arena Web Security is a renowned IT security company in Bangladesh since its establishment in 2012. During these years, Arena Web Security has provided Cyber Security Services and Trainings to many around the world.

                        Involved with Government entities in 2012 like ICT Ministry, Academy for Rural Development, University of Engineering and Technology. Experienced with cyber security support in corporate area linked with outsourcing market. Already 46 batchs received this training and have started to earn through online and corporate job.</p>
                    <a href="https://arenawebsecurity.net/admission"><button type="" className="btn btn-warning btn-animate text-4xl h-auto py-5 font-['Lateef'] normal-case shadow-[0px_0px_10px_10px_#ffffff5c] font-normal w-full">What are you waiting for? <br /> Enroll Now! </button></a>
                </div>
            </div>
            {/* <a href="https://arenawebsecurity.net/admission"><button type="link" className="mx-auto btn btn-warning btn-animate text-4xl h-auto py-5 font-['Lateef'] normal-case shadow-[0px_0px_10px_10px_#ffffff5c] font-normal w-auto">What are you waiting for? <br /> Enroll Now! </button></a> */}
        </section>
    );
};

export default About;