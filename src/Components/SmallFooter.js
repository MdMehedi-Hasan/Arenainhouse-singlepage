import { Icon } from '@iconify/react';
import React from 'react';
import image from './Assets/mainLogo.png'

const SmallFooter = () => {
    return (
        <section className='bg-gray-100 flex justify-center py-5'>
            <div className='container flex justify-between'>
                <div className='flex flex-col justify-center'>
                    <img src={image} alt="" className='w-48'/>
                    <p className='text-2xl leading-snug font-bold'>Your Decision <br/> Our Responsibility</p>
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>Hotline</h1>
                    <p className='mt-5 flex items-center font-semibold'><span className='text-xl text-purple-500'><Icon icon="ic:sharp-phone" /></span>&nbsp;+8801310-333-444</p>
                    <p className='mt-2 flex items-center font-semibold'><span className='text-xl text-purple-500'><Icon icon="ic:sharp-phone" /></span>&nbsp;+8801885-851-489</p>
                    <div className='flex gap-5 text-4xl mt-10 text-purple-500'>
                        <a href=""><Icon icon="ic:round-facebook" /></a>
                        <a href=""><Icon icon="entypo-social:youtube-with-circle" /></a>
                        <a href=""><Icon icon="mdi:book-edit-outline" /></a>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>Academy</h1>
                    <div className='mt-3'>
                        <p><span className='text-lg font-semibold'>Address:</span> House No-1, BLOCK-B Banasree, Main Road Rampura, Dhaka - 1219</p>
                        <p><span className='text-lg font-semibold'>Email:</span> info@arenawebsecurity.net</p>
                        <a href="https://arenawebsecurity.net/admission"><button type="" className="btn btn-warning animate-bounce text-4xl h-auto py-5 font-['Lateef'] normal-case shadow-[0px_0px_10px_10px_#ffffff5c] font-normal w-full mt-10"> Enroll Now! </button></a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SmallFooter;