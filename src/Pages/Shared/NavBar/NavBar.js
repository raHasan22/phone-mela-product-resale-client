import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error => {})
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
            <li tabIndex={0}>
                <Link to='/'>
                Products
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </Link>
                <ul className="bg-sky-900 sm:rounded z-10">
                <li className='text-white bg-sky-900 hover:bg-cyan-700'><Link to='/products'>All Products</Link></li>
                <li className='text-white bg-sky-900 hover:bg-cyan-700'><Link to='/ios'>IOS</Link></li>
                <li className='text-white bg-sky-900 hover:bg-cyan-700'><Link to='/android'>Android</Link></li>
                <li className='text-white bg-sky-900 hover:bg-cyan-700'><Link to='/tablet'>Tablets</Link></li>
                </ul>
            </li>
            <li><Link to='/blogs'>Blogs</Link></li>
            { user?.uid ?  <>
                <li><Link to='/manage'>Manage</Link></li>
                <li><button onClick={handleLogOut}>Log Out</button></li> 
            </> : <li><Link to='/login'>Log in</Link></li> }
    </>

    return (
        <div className="navbar bg-base-100 flex justify-between">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navOptions}
            </ul>
            </div>
            <Link to='/' className="btn btn-ghost normal-case text-xl">Phone<span className='text-primary'>Mela</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
            {navOptions}
            </ul>
        </div>
        </div>
    );
};

export default NavBar;