import { Icon } from '@iconify/react';
import React from 'react';
import './Statistics.css'

const Statistics = () => {
    return (
        <section className='pt-40 pb-10 bg-gray-50'>
            <h1 className='text-center text-6xl'>Statistics</h1>
            <p className="text-center text-3xl font-['Libre-Baskerville']">Statistics shows our demand on this field...</p>
            <div className='flex justify-center'>
                <div className='container grid grid-cols-5 gap-5 py-20 text-center'>
                    <div data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000" className='rounded flex flex-col items-center'>
                        <Icon className='text-6xl' icon="fluent:people-team-28-filled"/>
                        <p className="text-3xl font-['Libre-Baskerville']">15000+ Students</p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000" className='rounded flex flex-col items-center'>
                        <Icon className='text-6xl' icon="material-symbols:interactive-space-outline-rounded" />
                        <p className="text-3xl font-['Libre-Baskerville']">46 Completed Batches</p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000" className='rounded flex flex-col items-center'>
                        <Icon className='text-6xl' icon="fluent-mdl2:reading-mode" />
                        <p className="text-3xl font-['Libre-Baskerville']">121 Modules</p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000" className='rounded flex flex-col items-center'>
                        <Icon className='text-6xl' icon="jam:fiverr" />
                        <p className="text-3xl font-['Libre-Baskerville']">1000+ Freelancers</p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000" className='rounded flex flex-col items-center'>
                        <Icon className='text-6xl' icon="ph:office-chair-fill" />
                        <p className="text-3xl font-['Libre-Baskerville']">2000+ Corporate Jobs</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;