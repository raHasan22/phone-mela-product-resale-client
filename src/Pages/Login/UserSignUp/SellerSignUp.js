import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useJwt from '../../../CustomHooks/useJwt';

const SellerSignUp = () => {
    const {register, formState: { errors },  handleSubmit} = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('');
    const [token] = useJwt(userEmail);
    const navigate = useNavigate()

    if(token){
        navigate('/');
    }


    const handleSellerSignUp = data => {
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            toast.success(`${user.email} account created`);
            const userData = {
                displayName: data.name
            }
            updateUser(userData)
            .then(() =>{
                saveUser(data.name, data.email, data.userType)
            })
            .catch(err =>{})
        })
        .catch(error => {
            toast.error(`${error}`)
        });
    }

    const saveUser = (name, email, userType) =>{
        const user = {name, email, userType};
        fetch('https://mobile-phone-resale-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setUserEmail(email)
        } )
    }


    return (
        <div className='max-w-[85%] lg:w-2/5 rounded-lg shadow-lg p-5 mx-auto my-10'>
            <div className='my-8'>
                <h1 className="text-4xl text-center">Sign Up</h1>
            </div>
            <div className='grid gris-cols-1 gap-5'>
                <form className='grid gris-cols-1 gap-5' onSubmit={handleSubmit(handleSellerSignUp)}>
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
                value="Seller"/>
                <input className="btn btn-primary" type="submit" value="Sign Up"/>
                </form>
                <p className='text-center'>Already Have an account? <Link to='/login' className='text-neutral-content'>Log in</Link></p>
            </div>
        </div>
    );
};

export default SellerSignUp;