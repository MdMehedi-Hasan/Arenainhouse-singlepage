import React from 'react';
import video from "./Assets/movie.mp4";

const Video = () => {
    return (
        <div>
            <video width="320" height="240" controls autoPlay>
                <source src={video} type="video/mp4" />
                <source src={video} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Video;