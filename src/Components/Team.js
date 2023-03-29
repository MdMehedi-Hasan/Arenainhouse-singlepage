import React from 'react';
import img1 from './Assets/Team/1.png'
import img2 from './Assets/Team/2.png'
import img3 from './Assets/Team/3.png'
import img4 from './Assets/Team/4.png'
import './Team.css'

const Team = () => {
    return (
        <section className='flex justify-center py-20'>
            <div>
                <h1 className='text-center text-5xl font-semibold'>Traineer's Portfolio</h1>
                <p className='text-center text-xl mb-10'>Hands-on training from country top rated hackers</p>
                <div className='container grid grid-cols-4 gap-y-10 gap-x-5 justify-items-center'>
                    <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" className='max-w-xs relative shadow-2xl shadow-slate-400 bg-gray-50'>{/* shadow-[-20px_-20px_20px_17px_green;] */}
                        <div className='h-40 flex justify-center my-5'><img width="50%" src={img1} alt="Tanjim Al Fahim" className='rounded-full'/></div>
                        <div className='p-5 pt-2'>
                            <h1 className='text-2xl'>Tanjim Al Fahim</h1>
                            <p className='text-sm font-semibold mt-1 mb-3'>Founder & CEO Arena Web Security</p>
                            <p className=''>Areas of expertise: Vulnerability Assessment & Penetration Testing, Ethical Hacking, Cloud Security, OSINT, Cyber Forensics.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" className='max-w-xs relative shadow-2xl shadow-slate-400 bg-gray-50 '>
                    <div className='h-40 flex justify-center my-5'><img width="50%" src={img1} alt="Tanjim Al Fahim" className='rounded-full'/></div>
                        <div className='p-5 pt-2'>
                            <h1 className='text-2xl'>Md Jewele Islam</h1>
                            <p className='text-sm font-semibold mt-1 mb-3'>Sr. Trainer</p>
                            <p className=''>Areas of expertise: Ethical Hacking, Freelancing, Python, PHP.</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" className='max-w-xs relative shadow-2xl shadow-slate-400 bg-gray-50 '>
                    <div className='h-40 flex justify-center my-5'><img width="50%" src={img1} alt="Tanjim Al Fahim" className='rounded-full'/></div>
                        <div className='p-5 pt-2'>
                            <h1 className='text-2xl'>Asif Islam</h1>
                            <p className='text-sm font-semibold mt-1 mb-3'>Trainer</p>
                            <p className=''>Areas of expertise:Cyber Security, VAPT, Bug Bounty, Networking.</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" className='max-w-xs relative shadow-2xl shadow-slate-400 bg-gray-50 '>
                    <div className='h-40 flex justify-center my-5'><img width="50%" src={img1} alt="Tanjim Al Fahim" className='rounded-full'/></div>
                        <div className='p-5 pt-2'>
                            <h1 className='text-2xl'>Syed Sakib Alam Mubin</h1>
                            <p className='text-sm font-semibold mt-1 mb-3'>Trainer</p>
                            <p className=''>Areas of expertise: Cyber Security, Ethical Hacking, Linux RedHat.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" className='max-w-xs relative shadow-2xl shadow-slate-400 bg-gray-50 '>
                    <div className='h-40 flex justify-center my-5'><img width="50%" src={img1} alt="Tanjim Al Fahim" className='rounded-full'/></div>
                        <div className='p-5 pt-2'>
                            <h1 className='text-2xl'>Bijoy Mondal</h1>
                            <p className='text-sm font-semibold mt-1 mb-3'>Admin Support</p>
                            <p className=''>Areas of expertise: Cyber Security, Freelancing, Ethical Hacking, Linux.</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" className='max-w-xs relative shadow-2xl shadow-slate-400 bg-gray-50 '>{/* shadow-[-20px_-20px_20px_17px_green;] */}
                    <div className='h-40 flex justify-center my-5'><img width="50%" src={img1} alt="Tanjim Al Fahim" className='rounded-full'/></div>
                        <div className='p-5 pt-2'>
                            <h1 className='text-2xl'>Salman Hafizur Rahman</h1>
                            <p className='text-sm font-semibold mt-1 mb-3'>Admin Support</p>
                            <p className=''>Areas of expertise: Cyber Security, Ethical Hacking, Linux.</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" className='max-w-xs relative shadow-2xl shadow-slate-400 bg-gray-50 '>{/* shadow-[-20px_-20px_20px_17px_green;] */}
                    <div className='h-40 flex justify-center my-5'><img width="50%" src={img1} alt="Tanjim Al Fahim" className='rounded-full'/></div>
                        <div className='p-5 pt-2'>
                            <h1 className='text-2xl'>Roman Moonshi</h1>
                            <p className='text-sm font-semibold mt-1 mb-3'>Auditor</p>
                            <p className=''>Areas of expertise: Cyber Security, Ethical Hacking, Linux.</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" className='max-w-xs relative shadow-2xl shadow-slate-400 bg-gray-50 '>{/* shadow-[-20px_-20px_20px_17px_green;] */}
                    <div className='h-40 flex justify-center my-5'><img width="50%" src={img1} alt="Tanjim Al Fahim" className='rounded-full'/></div>
                        <div className='p-5 pt-2'>
                            <h1 className='text-2xl'>Mohammad Abdullah</h1>
                            <p className='text-sm font-semibold mt-1 mb-3'>Course Advisor</p>
                            <p className=''>Areas of expertise: Cyber Security, Ethical Hacking, Linux.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;