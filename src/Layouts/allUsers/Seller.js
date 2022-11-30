import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Seller = () => {
    const { data: sellers = [], refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async() =>{
            const res = await fetch('https://mobile-phone-resale-server.vercel.app/sellers');
            const data = await res.json();
            return data;
        }
    })

    const handleVerify = id => {
        fetch(`https://mobile-phone-resale-server.vercel.app/seller/verify/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('User verified')
                refetch();
            }
        })
    }

    return (
        <div>
        <h3 className="text-4xl m-5">Users</h3>
        <div className="overflow-x-auto">
        <table className="table w-full my-5">
        <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Device Name</th>
            <th>Role</th>
            <th>action</th>
        </tr>
        </thead>
        <tbody>
        {
            sellers.map((seller, i) =><tr key={i}>
            <th>{i+1}</th>
            <td>{seller.name}</td>
            <td>{seller.email} </td>
            <td>{seller.userType}</td>
            <td>{seller?.verified !== "yes" && <button onClick={() => handleVerify(seller._id)} className='btn btn-xs btn-primary'>Verify</button>}</td>
         </tr>
            
            )
        }
        </tbody>
    </table>
    </div>
        </div>
    );
};

export default Seller;