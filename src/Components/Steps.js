import { Icon } from '@iconify/react';
import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import './Steps.css'

const Steps = () => {
    useEffect(() => {
        Aos.init();
    },[])
    return (
        <section className='py-14 bg-circle'>
            <h1 className='text-7xl text-center mb-32'>What We Provide</h1>
            <div className='conatiner mx-auto flex items-center flex-col'>
                <div className='relative'>
                    <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000" className='absolute right-[-320px] top-[7px] border-0 text-center p-3 w-72 rounded-lg bg-emerald-300'>
                    <Icon icon="fa6-solid:hat-cowboy" className='mx-auto text-6xl text-sky-900'/>
                        <h5 className="text-lg font-bold font-['Libre-Baskerville']">Complete Hacking Guide</h5>
                        <p className="font-['Abhaya-Libre']">We provide complete guide from scratch to professional level.</p>
                    </div>
                    <div className='down_arrow'><div></div></div>
                </div>
                <div className='relative'>
                    <div className='down_arrow'><div></div></div>
                    {/* <span className='absolute left-[-150px] top-[75px] text-lg font-bold'>152 Modules</span> */}
                    <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000" className='absolute left-[-320px] top-[7px] border text-center p-3 w-72 rounded-lg bg-emerald-300'>
                    <Icon icon="mdi:account-graduation" className='mx-auto text-6xl text-sky-900'/>
                        <h5 className="text-2xl font-bold font-['Libre-Baskerville']">1 Month Internship</h5> 
                        <p className="font-['Abhaya-Libre']">We provide complete guide from scratch to professional level.</p>
                    </div>
                </div>
                <div className='relative'>
                    <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000" className='absolute right-[-320px] top-[7px] border text-center p-3 w-72 rounded-lg bg-emerald-300'>
                    <Icon icon="iconoir:headset-help" className='mx-auto text-6xl text-sky-900'/>
                        <h5 className="text-2xl font-bold font-['Libre-Baskerville']">Instant Support</h5>
                        <p className="font-['Abhaya-Libre']">We provide complete guide from scratch to professional level.</p>
                    </div>
                    <div className='down_arrow'><div></div></div>
                </div>
                <div className='relative'>
                    <div className='down_arrow'><div></div></div>
                    <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000" className='absolute left-[-320px] top-[7px] border text-center p-3 w-72 rounded-lg bg-emerald-300'>
                    <Icon icon="jam:fiverr" className='mx-auto text-6xl text-sky-900'/>
                        <h5 className="text-2xl font-bold font-['Libre-Baskerville']">Freelancing Help</h5>
                        <p className="font-['Abhaya-Libre']">We provide complete guide from scratch to professional level.</p>
                    </div>
                </div>
                <div className='relative'>
                <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000" className='absolute right-[-320px] top-[7px] border text-center p-3 w-72 rounded-lg bg-emerald-300'>
                    <Icon icon="mdi:book-open-page-variant" className='mx-auto text-6xl text-sky-900'/>
                        <h5 className="text-2xl font-bold font-['Libre-Baskerville']">121 Modules</h5>
                        <p className="font-['Abhaya-Libre'] text-lg">We provide complete guide from scratch to professional level.</p>
                    </div>
                    <div className='down_arrow'><div></div></div>
                </div>
            </div>
        </section>
    );
};

export default Steps;