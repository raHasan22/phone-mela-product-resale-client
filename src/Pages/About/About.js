import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/4C99/production/_105290691_mobilephonesgetty.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
            <div>
            <h1 className="text-5xl font-bold">Phone mela</h1>
            <p className="py-6">We are providing good quality phone as well as tablets both from Android and Ios world at cheaper price for those are really needed</p>
            <button className="btn btn-primary"><Link to='/'>Get Started</Link></button>
            </div>
        </div>
        </div>
    );
};

export default About;