import React, { useEffect, useState } from 'react';
import PrivateRoute from '../../Routes/PrivateRoute/PrivateRoute';
import Details from './Details';
import Product from './Product';
import UserInfo from './UserInfo';

const Ios = () => {
    const [details, setDetails] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('https://mobile-phone-resale-server.vercel.app/phoneInfoCollection/Ios/Smart%20Phone')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <div>
                <h1 className="bg-primary text-white text-center p-4 rounded-xl text-5xl my-5">Android Devices</h1>
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

export default Ios;