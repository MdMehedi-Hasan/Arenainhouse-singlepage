import { Icon } from '@iconify/react';
import React from 'react';
import hacker from './Assets/hacker2.png'
// import bg1 from './Assets/Shapes/price-shape.svg'
import './Price.css'

const Price = () => {
    return (
        <section className="flex justify-center py-10 bg-shape bg-cover bg-no-repeat">
            <div className='container flex items-center justify-around'>
                <div className='w-3/12'>
                    <h1 className='text-6xl mb-3'>Pricing Plan</h1>
                    {/* <p className="font-['Space-Grotesk']">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. </p> */}
                    <p className='text-2xl mb-5 font-serif'>Course Fee: 14,000&#2547;</p>
                    <ul>
                        <li className='flex items-center gap-3'><div><Icon icon="material-symbols:arrow-circle-right-outline" className='text-green-500' /></div><div className='font-["Ubuntu"]'>3 Months of Course Plan</div></li>
                        <li className='flex items-center gap-3'><div><Icon icon="material-symbols:arrow-circle-right-outline" className='text-green-500' /></div><div className='font-["Ubuntu"]'>1 Month of internships</div></li>
                        <li className='flex items-center gap-3'><div><Icon icon="material-symbols:arrow-circle-right-outline" className='text-green-500' /></div><div className='font-["Ubuntu"]'>Interest free double instalment facility</div></li>
                    </ul>
                </div>
                <div>
                    <div className='rounded-3xl overflow-hidden flex flex-col items-center w-96 bg-white shadow-2xl'>
                        <h1 className="bg-gradient-to-r from-[#00CC99] to-[#753ccace] py-10 w-full text-center font-serif font-bold text-lg text-white">Cyber Security & Ethical Hacking</h1>{/* bg-[linear-gradient_87deg_#00CC99_#6600ff87] */}
                        <img src={hacker} alt="" className='w-24 py-10' />
                        <h1 className="text-center font-normal text-xl mb-5 font-['Ubuntu']">Free Bundle</h1>
                        <ul className='w-full pl-5'>
                            <li className='flex items-center gap-3'><div><Icon icon="material-symbols:arrow-circle-right-outline" className='text-green-500' /></div><div className='font-mono'>Tools that worth of 442&#36;</div></li>
                            <li className='flex items-center gap-3'><div><Icon icon="material-symbols:arrow-circle-right-outline" className='text-green-500' /></div><div className='font-mono'>Mid & final exam</div></li>
                            <li className='flex items-center gap-3'><div><Icon icon="material-symbols:arrow-circle-right-outline" className='text-green-500' /></div><div className='font-mono'>12+ Projects</div></li>
                            <li className='flex items-center gap-3'><div><Icon icon="material-symbols:arrow-circle-right-outline" className='text-green-500' /></div><div className='font-mono'>Viva</div></li>
                            <li className='flex items-center gap-3'><div><Icon icon="material-symbols:arrow-circle-right-outline" className='text-green-500' /></div><div className='font-mono'>Internship</div></li>
                            <li className='flex items-center gap-3'><div><Icon icon="material-symbols:arrow-circle-right-outline" className='text-green-500' /></div><div className='font-mono'>Certification</div></li>
                        </ul>
                        <a href="https://arenawebsecurity.net/admission"><button type="" className='bg-gradient-to-r from-[#00CC99] to-[#753ccace] border rounded-full py-2 px-5 text-white w-fit my-10 font-serif font-semibold flex items-center'>ENROLL NOW! <Icon icon="svg-spinners:pulse" /></button></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;