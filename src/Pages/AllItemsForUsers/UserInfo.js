import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const UserInfo = ({details, setDetails}) => {
    const {brandName, model, sellingPrice, ram, rom} = details;
    const {user} = useContext(AuthContext)

    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const buyerInfo = {
            productName: brandName + ' '+ model,
            ram,
            rom,
            buyerName: name,
            buyerAddress: address,
            email,
            price,
            phone
            }
            console.log(buyerInfo)
            fetch('https://mobile-phone-resale-server.vercel.app/bookings', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(buyerInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
               if(data.acknowledged){
                setDetails(null);
                toast.success('Your booking successful')
               }
            })
            
    }

    return (
        <>
          <input type="checkbox" id="user-info" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-2">{brandName} {model}</h3>
                <form onSubmit={handleBooking}>
                <input name="ram" type="text" defaultValue={ram} disabled placeholder="Device Ram" className="input input-bordered input-primary w-full mb-2" />
                <input name="rom" type="text" defaultValue={rom} disabled placeholder="Device Storage" className="input input-bordered input-primary w-full mb-2" />
                <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered input-primary w-full mb-2" />
                <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered input-primary w-full mb-2" />
                <input name="address" type="text" placeholder="Your Address" className="input input-bordered input-primary w-full mb-2" />
                <input name="price" type="text" placeholder="Price" defaultValue={sellingPrice} className="input input-bordered input-primary w-full mb-2" disabled />
                <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered input-primary w-full mb-2"/> <br />
                <input onClick={() => setDetails(details)} className="btn btn-primary w-full mb-2" type="submit" value="Submit" />
                </form>
                <label htmlFor="user-info" className="btn w-full">Cancel</label>
                
            </div>
            </div>  
        </>
    );
};

export default UserInfo;