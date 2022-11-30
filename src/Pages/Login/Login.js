import { GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useJwt from '../../CustomHooks/useJwt';

const Login = () => {
    const {register, formState: { errors },  handleSubmit} = useForm();
    const {signIn, googleSignUp} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [loginEmail, setLoginEmail] = useState('');
    const [token] = useJwt(loginEmail);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace: true});
    }
    
    const handleLogin = data => {
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            toast.success(`${user.email} account created`)
            setLoginEmail(data.email);
        })
        .catch(error => {
            toast.error(`${error}`)
        });
    }

    const handleGoogleLogin = () =>{
        googleSignUp(googleProvider)
        .then(result => {
            const user = result.user;
            saveUser(user.displayName, user.email, 'Buyer')
            toast.success(`${user.email} Log in Successful`);
            setLoginEmail(user.email);
        })
        .catch(error => {})
    }

    const saveUser = (name, email, userType) =>{
        const user = {name, email, userType};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setLoginEmail(email)
        } )
    }


    return (
        <div className='max-w-[85%] lg:w-2/5 rounded-lg shadow-lg p-5 mx-auto my-10'>
            <div className='my-8'>
                <h1 className="text-4xl text-center">Log in</h1>
            </div>
            <div className='grid gris-cols-1 gap-5'>
                <form className='grid gris-cols-1 gap-5' onSubmit={handleSubmit(handleLogin)}>
                <input type="email" className="input input-bordered" 
                {...register("email", {required: "Email Address required"})} 
                placeholder="Your Email Address" />
                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                <input type="password" className="input input-bordered" 
                {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be 6 Character or Longer"}
                })} 
                placeholder="Password" />
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                <input className="btn btn-primary" type="submit" value="Log in"/>
                </form>
                <p className='text-center'>Don't have an account <Link to='/signup' className='text-neutral-content'>Sign Up</Link></p>
                <p className='text-center'><small>Are you a seller? <Link to='/sellersignup' className='text-neutral-content'>Sign Up</Link></small></p>
                <button onClick={handleGoogleLogin} className='btn btn-secondary'>Google</button>
            </div>
        </div>
    );
};

export default Login;