import React, { useEffect, useState } from 'react';
import Details from './Details';
import Product from './Product';
import UserInfo from './UserInfo';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [details, setDetails] = useState(null)
    useEffect( () =>{
        fetch('Allitems.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <div>
                <h1 className="bg-primary text-white text-center p-4 rounded-xl text-5xl my-5">All Products for Sale</h1>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-10 mb-5'>
                {
                    products.map(product => <Product
                    key={product.id}
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
                <UserInfo details={details}></UserInfo>
            }
            
        </div>
    );
};

export default AllProducts;