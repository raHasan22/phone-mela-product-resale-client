import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="https://cdn.vox-cdn.com/thumbor/tknzCE9VKxmMn8-jIJvLEFZMI0I=/0x0:2019x1346/768x768/filters:focal(1004x1140:1005x1141)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863269/vpavic_210916_4760_0069.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
            <div>
            <h1 className="text-5xl font-bold">Contact Us!</h1>
            <p className="py-6">Phone: 01XXXXXXXXX <br />
            Email: phone@mela.com <br />
            Physical Shop: Dhaka Bangladesh</p>
            <button className="btn btn-primary"><Link to='/'>Get Started</Link></button>
            </div>
        </div>
        </div>
    );
};

export default Contact;