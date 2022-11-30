import React from 'react';

const Report = () => {

    const reportSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const report = form.report.value;
        console.log(email, report)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row lg:justify-evenly">
            <img src="https://www.ninosinc.org/wp-content/uploads/2015/10/report-icon.gif" className="max-w-sm rounded-lg shadow-2xl" alt=''/>
            <div>
            <h1 className="text-5xl font-bold mb-10">Report to admin!</h1>
            <form onSubmit={reportSubmit}>
            <input name='email' className="input input-bordered input-primary mb-2" type="email" placeholder='Your Email' /> <br />
            <textarea name='report' className="textarea textarea-primary my-2" type="text" placeholder="What is the problem"></textarea> <br />
            <input className='btn btn-primary' type="submit" value='Submit' />
            </form>
            </div>
        </div>
        </div>
    );
};

export default Report;