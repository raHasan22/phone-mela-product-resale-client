import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../CustomHooks/useAdmin';
import useSeller from '../CustomHooks/useSeller';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const Secondary = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  return (
        <div>
            <NavBar></NavBar>
            <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
              <div className="w-full navbar bg-base-300">
                <div className="flex-none lg:hidden">
                  <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </label>
                </div> 
                <div className="flex-1 px-2 mx-2">Manage</div>
                <div className="flex-none hidden lg:block">
                  <ul className="menu menu-horizontal">
                    <li><Link to='/manage'>My Orders</Link></li>
                    {
                    isSeller && <li><Link to='/manage/mysells'>My Sells</Link></li>
                    }
                    {
                      isAdmin && <>
                      <li><Link to='/manage/mysells'>My Sells</Link></li>
                      <li><Link to='/manage/users'>Users</Link></li>
                    <li><Link to='/manage/Sellers'>Sellers</Link></li>
                    <li><Link to='/manage/reports'>Reports</Link></li>
                      </>
                    }
                  </ul>
                </div>
              </div>
              <Outlet></Outlet>
            </div> 
            <div className="drawer-side">
              <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
              <ul className="menu p-4 w-80 bg-base-100">
                  <li><Link to='/manage'>My Orders</Link></li>
                  {
                    isSeller && <li><Link to='/manage/mysells'>My Sells</Link></li>
                  }
                  {
                      isAdmin && <>
                      <li><Link to='/manage/mysells'>My Sells</Link></li>
                      <li><Link to='/manage/users'>Users</Link></li>
                    <li><Link to='/manage/Sellers'>Sellers</Link></li>
                    <li><Link to='/manage/reports'>Reports</Link></li>
                      </>
                    }
              </ul>
              
            </div>
          </div>
        </div>
    );
};

export default Secondary;