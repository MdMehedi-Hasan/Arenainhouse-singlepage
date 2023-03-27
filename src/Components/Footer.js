import React from 'react';
import logo from './Assets/mainLogo.png'

const Footer = () => {
    return (
        <section className='py-10 bg-gray-50'>
            <div className='container mx-auto flex gap-10'>
                <div className='flex-1 flex justify-start items-center'>
                    <img src={logo} alt="" className='w-1/2' />
                </div>
                <div className='flex-1 flex flex-col justify-between'>
                    <p className='mb-20 text-6xl gradientText'>La Force De Cura unamatina. Haulo kukana mita exitmento de paulo!</p>
                    <a href="https://arenawebsecurity.net/admission"><button type="" className="btn btn-warning animate-bounce text-4xl h-auto py-5 font-['Lateef'] normal-case shadow-[0px_0px_10px_10px_#ffffff5c] font-normal w-full">See you on the course. <br /> Enroll Now! </button></a>
                </div>
            </div>
        </section>
    );
};

export default Footer;