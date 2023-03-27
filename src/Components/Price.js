import { Icon } from '@iconify/react';
import React from 'react';
import hacker from './Assets/hacker1.png' 

const Price = () => {
    return (
        <section className='flex justify-center bg-gray-50 py-20 mb-20'>
            <div className='container flex items-center justify-between'>
                <div className='w-3/12'>
                    <h1 className='text-6xl mb-10'>Pricing Plan</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. </p>
                </div>
                <div>
                    <div className='border rounded-xl overflow-hidden flex flex-col items-center w-96 bg-white shadow-lg'>
                        <h1 className='bg-green-300 py-10 w-full text-center'>Cyber Security & Ethical Hacking</h1>
                        <img src={hacker} alt="" className='w-24'/>
                        <h1 className='text-center'>Course Fee: 14,000 <sub>(Free Bundle)</sub></h1>
                        <ul className='w-full pl-5'>
                            <li className='flex items-center gap-3'><div><Icon icon="material-symbols:arrow-circle-right-outline" /></div><div>Figma</div></li>
                            <li className='flex items-center gap-3'><div><Icon icon="material-symbols:arrow-circle-right-outline" /></div><div>Photoshop</div></li>
                            <li className='flex items-center gap-3'><div><Icon icon="material-symbols:arrow-circle-right-outline" /></div><div>Adobe</div></li>
                            <li className='flex items-center gap-3'><div><Icon icon="material-symbols:arrow-circle-right-outline" /></div><div>Visual Studio</div></li>
                            <li className='flex items-center gap-3'><div><Icon icon="material-symbols:arrow-circle-right-outline" /></div><div>Linux</div></li>
                            <li className='flex items-center gap-3'><div><Icon icon="material-symbols:arrow-circle-right-outline" /></div><div>kali</div></li>
                        </ul>
                        <a href="https://arenawebsecurity.net/admission"><button type="" className='border rounded-full p-2 bg-green-300 w-fit my-10'>ENROLL NOW!</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;