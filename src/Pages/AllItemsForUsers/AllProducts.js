import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Details from './Details';
import Product from './Product';
import UserInfo from './UserInfo';
import PrivateRoute from '../../Routes/PrivateRoute/PrivateRoute'

const AllProducts = () => {
    const [details, setDetails] = useState(null)

    const {data: products = []} = useQuery({
        queryKey: ['phoneInfoCollection'],
        queryFn: () => fetch('https://mobile-phone-resale-server.vercel.app/phoneInfoCollection')
                        .then(res => res.json())
    })

    
    return (
        <div>
            <div className='max-w-[1200px] mx-10 lg:mx-auto'>
                <h1 className="bg-gradient-to-b from-[#414141] to-[#000000] text-white text-center p-4 rounded-xl text-5xl my-5">All Products for Sale</h1>
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

export default AllProducts;