import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const Report = () => {
    const {user} = useContext(AuthContext);

    const reportSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const details = form.report.value;
        const report = {name, email, details};

        fetch('https://mobile-phone-resale-server.vercel.app/report', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(report)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
               if(data.acknowledged){
                form.reset();
                toast.success('Report Submitted');
               }
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row lg:justify-evenly">
            <img src="https://www.ninosinc.org/wp-content/uploads/2015/10/report-icon.gif" className="max-w-sm rounded-lg shadow-2xl" alt=''/>
            <div>
            <h1 className="text-5xl font-bold mb-10">Report to admin!</h1>
            <form onSubmit={reportSubmit}>
            <input name='name' defaultValue={user?.displayName} className="input input-bordered input-primary mb-2" type="text" placeholder='Your Name' /> <br />
            <input name='email' defaultValue={user?.email} className="input input-bordered input-primary mb-2" type="email" placeholder='Your Email' /> <br />
            <textarea name='report' className="textarea textarea-primary my-2" type="text" placeholder="What is the problem"></textarea> <br />
            <input className='btn btn-primary' type="submit" value='Submit' />
            </form>
            </div>
        </div>
        </div>
    );
};

export default Report;