import React from 'react';
import './Steps.css'

const Steps = () => {
    return (
        <section>
            <div className='flex items-center flex-col'>
                <div className='relative'>
                    <span className='absolute right-[-150px] top-[75px] text-lg font-bold'>Something Here</span>
                    <div className='down_arrow'></div>
                </div>
                <div className='relative'>
                    <div className='down_arrow'></div>
                    <span className='absolute left-[-150px] top-[75px] text-lg font-bold'>Something Here</span>
                </div>
                <div className='relative'>
                    <span className='absolute right-[-150px] top-[75px] text-lg font-bold'>Something Here</span>
                    <div className='down_arrow'></div>
                </div>
                <div className='relative'>
                    <div className='down_arrow'></div>
                    <span className='absolute left-[-150px] top-[75px] text-lg font-bold'>Something Here</span>
                </div>
                <div className='relative'>
                    <span className='absolute right-[-150px] top-[75px] text-lg font-bold'>Something Here</span>
                    <div className='down_arrow'></div>
                </div>
            </div>
        </section>
    );
};

export default Steps;