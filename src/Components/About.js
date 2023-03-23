import React from 'react';
import test from './Assets/AWSCourse.webp'
import hackerImg from './Assets/hacker.png'

const About = () => {
    return (
        <section className='bg-sky-900 text-white bg-image relative py-40'>
            <div className='h-full w-full absolute flex justify-center items-center opacity-5'>
            <img src={hackerImg} alt="" className='z-50'/>
            </div>
            <h1 className='text-center text-8xl mb-32'>About Us</h1>
            <div className='container mx-auto flex gap-20 items-center'>
                <div>
                    <img src={test} alt="" width="" />
                </div>
                <div>
                    <p className='text-justify text-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
            </div>
        </section>
    );
};

export default About;