import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const UserSignUp = () => {
    const {register, formState: { errors },  handleSubmit} = useForm();

    const handleUserSignUp = data => {
        console.log(data)
    }


    return (
        <div className='max-w-[85%] lg:w-2/5 rounded-lg shadow-lg p-5 mx-auto my-10'>
            <div className='my-8'>
                <h1 className="text-4xl text-center">Sign Up</h1>
            </div>
            <div className='grid gris-cols-1 gap-5'>
                <form className='grid gris-cols-1 gap-5' onSubmit={handleSubmit(handleUserSignUp)}>
                <input type="text" className="input input-bordered" 
                {...register("name", {required: "Name required"})} 
                placeholder="Your Name" />
                {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                <input type="email" className="input input-bordered" 
                {...register("email", {required: "Email Address required"})} 
                placeholder="Your Email Address" />
                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                <input type="password" className="input input-bordered" 
                {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be 6 Character or Longer"},
                    pattern: {value: /(?=.*[a-z])(?=.*[0-9])/, message: "Need strong password"}
                })} 
                placeholder="Password" />
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                <input type="text" className="input input-bordered" 
                {...register("userType")} 
                value="Buyer"/>
                <input className="btn btn-primary" type="submit" value="Sign Up"/>
                </form>
                <p className='text-center'>Already Have an account? <Link to='/login' className='text-neutral-content'>Log in</Link></p>
                <button className='btn btn-secondary'>Google</button>
            </div>
        </div>
    );
};

export default UserSignUp;