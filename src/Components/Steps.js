import { Icon } from '@iconify/react';
import React from 'react';
import './Steps.css'

const Steps = () => {
    return (
        <section className='py-40 bg-circle'>
            <h1 className='text-7xl text-center mb-32'>What We Provide</h1>
            <div className='conatiner mx-auto flex items-center flex-col'>
                <div className='relative'>
                    <div className='absolute right-[-450px] top-[75px] border-0 text-center p-5 w-96 rounded-lg bg-emerald-300'>
                    <Icon icon="fa6-solid:hat-cowboy" className='mx-auto text-8xl text-sky-900'/>
                        <h5 className='text-2xl font-bold'>Complete Hacking Guide</h5>
                        <p>We provide complete guide from scratch to professional level.</p>
                    </div>
                    <div className='down_arrow'><div></div></div>
                </div>
                <div className='relative'>
                    <div className='down_arrow'><div></div></div>
                    {/* <span className='absolute left-[-150px] top-[75px] text-lg font-bold'>152 Modules</span> */}
                    <div className='absolute left-[-450px] top-[75px] border text-center p-5 w-96 rounded-lg bg-emerald-300'>
                    <Icon icon="mdi:account-graduation" className='mx-auto text-8xl text-sky-900'/>
                        <h5 className='text-2xl font-bold'>1 Month Internship</h5> 
                        <p>We provide complete guide from scratch to professional level.</p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute right-[-450px] top-[75px] border text-center p-5 w-96 rounded-lg bg-emerald-300'>
                    <Icon icon="iconoir:headset-help" className='mx-auto text-8xl text-sky-900'/>
                        <h5 className='text-2xl font-bold'>Instant Support</h5>
                        <p>We provide complete guide from scratch to professional level.</p>
                    </div>
                    <div className='down_arrow'><div></div></div>
                </div>
                <div className='relative'>
                    <div className='down_arrow'><div></div></div>
                    <div className='absolute left-[-450px] top-[75px] border text-center p-5 w-96 rounded-lg bg-emerald-300'>
                    <Icon icon="jam:fiverr" className='mx-auto text-8xl text-sky-900'/>
                        <h5 className='text-2xl font-bold'>Freelancing Help</h5>
                        <p>We provide complete guide from scratch to professional level.</p>
                    </div>
                </div>
                <div className='relative'>
                <div className='absolute right-[-450px] top-[75px] border text-center p-5 w-96 rounded-lg bg-emerald-300'>
                    <Icon icon="mdi:book-open-page-variant" className='mx-auto text-8xl text-sky-900'/>
                        <h5 className='text-2xl font-bold'>152 Modules</h5>
                        <p>We provide complete guide from scratch to professional level.</p>
                    </div>
                    <div className='down_arrow'><div></div></div>
                </div>
            </div>
        </section>
    );
};

export default Steps;