import { Icon } from '@iconify/react';
import React from 'react';

const Statistics = () => {
    return (
        <section className='pb-20'>
            <h1 className='text-center text-6xl'>Statistics</h1>
            <p className='text-center text-3xl'>Statistics shows our demand on this field...</p>
            <div className='flex justify-center'>
                <div className='container grid grid-cols-4 gap-5 py-20 text-center'>
                    <div className='rounded flex flex-col items-center'>
                        <Icon className='text-6xl' icon="fluent:people-team-28-filled" />
                        <p className='text-3xl font-semibold'>15000+ Students</p>
                    </div>
                    <div className='rounded flex flex-col items-center'>
                        <Icon className='text-6xl' icon="material-symbols:interactive-space-outline-rounded" />
                        <p className='text-3xl font-semibold'>46 Completed Batches</p>
                    </div>
                    <div className='rounded flex flex-col items-center'>
                        <Icon className='text-6xl' icon="fluent-mdl2:reading-mode" />
                        <p className='text-3xl font-semibold'>152 Modules</p>
                    </div>
                    <div className='rounded flex flex-col items-center'>
                        <Icon className='text-6xl' icon="jam:fiverr" />
                        <p className='text-3xl font-semibold'>1000+ Freelancers</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;