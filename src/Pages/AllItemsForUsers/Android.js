import React, { useEffect, useState } from 'react';
import PrivateRoute from '../../Routes/PrivateRoute/PrivateRoute';
import Details from './Details';
import Product from './Product';
import UserInfo from './UserInfo';
import { FaCircleNotch } from "react-icons/fa";


const Android = () => {
    const [details, setDetails] = useState(null);
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    

    useEffect(() =>{
        setLoader(true);
        fetch('https://mobile-phone-resale-server.vercel.app/phoneInfoCollection/Android/Smart%20Phone')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setLoader(false);
        })
    },[])

    if(loader) {
        return <div className='flex items-center justify-center my-20'>
        <FaCircleNotch className='text-8xl animate-spin'></FaCircleNotch>
        </div>
    }

    return (
        <div>
            <div className='max-w-[1200px] mx-10 lg:mx-auto'>
                <h1 className="bg-gradient-to-b from-[#414141] to-[#000000] text-white text-center p-4 rounded-xl text-5xl my-5">Android Devices</h1>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-10 mb-5'>
                {
                    products.map(product => <Product
                    key={product._id}
                    product={product}
                    setDetails={setDetails}
                    ></Product>)
                }
            </div>
            {
                details && 
                <Details details={details}></Details>
            }
            {
                details && 
                <PrivateRoute>
                    <UserInfo details={details}
                setDetails={setDetails}
                ></UserInfo>
                </PrivateRoute>
            }
            
        </div>
    );
};

export default Android;