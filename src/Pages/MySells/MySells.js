import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const MySells = () => {
    const { user } = useContext(AuthContext);

    const url = `https://mobile-phone-resale-server.vercel.app/allPhoneInfo?email=${user?.email}`;
    
    const { data: allPhoneInfo = [], refetch } = useQuery({
        queryKey: ['allPhoneInfo', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handlePhoneDelete = id => {
        fetch(`https://mobile-phone-resale-server.vercel.app/phones/delete/${id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                toast.success('Post Deleted')
                refetch();
            }
        })
    }

    return (
        <div>
        <h3 className="text-4xl m-5">My Sellings</h3>
        <div className="overflow-x-auto">
    <table className="table w-full my-5">
        <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Device Name</th>
            <th>Storage</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {
            allPhoneInfo.map((phoneinfo, i) =><tr key={i}>
            <th>{i+1}</th>
            <td>{phoneinfo.sellerName}</td>
            <td>{phoneinfo.brandName} {phoneinfo.model}</td>
            <td>{phoneinfo.ram}{phoneinfo.rom}</td>
            <td>{phoneinfo.sellingPrice}$</td>
            <td><button onClick={() => handlePhoneDelete(phoneinfo._id)} className='btn btn-xs btn-danger'>delete</button></td>
         </tr>
            
            )
        }
        </tbody>
    </table>
    </div>
    </div>
    );
};

export default MySells;