import React from 'react';
import video from "./Assets/movie.mp4";

const Video = () => {
    return (
        <section>
            <div className='container mx-auto flex justify-between items-center gap-20 pt-20'>
                <video width="50%" controls autoPlay>
                    <source src={video} type="video/mp4" />
                    <source src={video} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
                <div>
                    <h1>Arena Web Security</h1>
                    <h3>New Window of World Wide Web</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
            </div>
        </section>
    );
};

export default Video;