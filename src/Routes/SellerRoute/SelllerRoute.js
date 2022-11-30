import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../CustomHooks/useAdmin';
import useSeller from '../../CustomHooks/useSeller';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isSeller, sellerLoading] = useSeller(user?.email);
    const [isAdmin, AdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if(loading || sellerLoading || AdminLoading){
        return <progress className="progress w-56 text-center"></progress>
    }
    if(user && ( isSeller || isAdmin )){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default SellerRoute;