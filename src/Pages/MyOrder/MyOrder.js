import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const MyOrder = () => {
    const { user } = useContext(AuthContext);

    const url = `https://mobile-phone-resale-server.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
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

    const handleBookDelete = id => {
        fetch(`https://mobile-phone-resale-server.vercel.app/bookings/delete/${id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                toast.success('Order Cancelled')
                refetch();
            }
        })
    }

    return (
        <div>
            <h3 className="text-4xl m-5">My Orders</h3>
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
                bookings.map((booking, i) =><tr key={i}>
                <th>{i+1}</th>
                <td>{booking.buyerName}</td>
                <td>{booking.productName}</td>
                <td>{booking.ram}{booking.rom}</td>
                <td>{booking.price}$</td>
                <td><button onClick={() => handleBookDelete(booking._id)} className='btn btn-xs btn-danger'>delete</button></td>
             </tr>
                
                )
            }
            </tbody>
        </table>
        </div>
        </div>
    );
};

export default MyOrder;