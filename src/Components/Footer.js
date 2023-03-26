import React from 'react';
import logo from './Assets/mainLogo.png'

const Footer = () => {
    return (
        <div className='flex gap-10 py-10 bg-black text-white'>
            <div className='flex-1'>
            <img src={logo} alt="" />
            </div>
            <div className='flex-1 flex flex-col justify-between'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptas quasi tempore repellat enim, dolorum nesciunt reprehenderit distinctio totam? Sit consectetur culpa eligendi nisi dolorem alias repellendus consequatur repudiandae voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nulla laudantium saepe, quo aspernatur quae maiores eius facilis at perspiciatis voluptates iste velit illo. Iusto qui a non quis neque!</p>
                <a href="https://arenawebsecurity.net/admission"><button type="" className="btn btn-warning animate-bounce text-4xl h-auto py-5 font-['Lateef'] normal-case shadow-[0px_0px_10px_10px_#ffffff5c] font-normal w-full">What are you waiting for? <br /> Enroll Now! </button></a>
            </div>
        </div>
    );
};

export default Footer;