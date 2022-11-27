import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const {register, handleSubmit} = useForm();
    
    const handleLogin = data => {
        console.log(data)
    }


    return (
        <div className='max-w-[85%] lg:w-2/5 rounded-lg shadow-lg p-5 mx-auto my-10'>
            <div className='my-8'>
                <h1 className="text-4xl text-center">Log in</h1>
            </div>
            <div className='grid gris-cols-1 gap-5'>
                <form className='grid gris-cols-1 gap-5' onSubmit={handleSubmit(handleLogin)}>
                <input type="email" className="input input-bordered" {...register("email")} placeholder="Your Email Address" />
                <input type="password" className="input input-bordered" {...register("password")} placeholder="Password" />
                <input className="btn btn-primary" type="submit" value="Log in"/>
                </form>
                <p className='text-center'>Don't have an account <Link className='text-neutral-content'>Sign Up</Link></p>
                <p className='text-center'><small>Are you a seller? <Link className='text-neutral-content'>Log in</Link></small></p>
                <button className='btn btn-secondary'>Google</button>
            </div>
        </div>
    );
};

export default Login;