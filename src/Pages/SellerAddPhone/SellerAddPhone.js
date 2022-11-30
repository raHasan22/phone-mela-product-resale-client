import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';



const SellerAddPhone = () => {
    const {user} = useContext(AuthContext);

    const handleAddDevice = event =>{
        event.preventDefault()
        const form = event.target;
        const deviceInfo = {
            brandName: form.brandName.value,
            model: form.model.value,
            ram: form.ram.value,
            rom: form.rom.value,
            camera: form.camera.value,
            processor: form.processor.value,
            os: form.os.value,
            deviceType: form.deviceType.value,
            image: form.image.value,
            battery: form.battery.value,
            sellerName: form.sellerName.value,
            sellerEmail: form.sellerEmail.value,
            sellingReason: form.sellingReason.value,
            marketPrice: form.marketPrice.value,
            sellingPrice: form.sellingPrice.value,
            postDate: form.postDate.value,
            usedTime: form.usedTime.value,
        }
        console.log(deviceInfo);
        fetch('http://localhost:5000/phoneInfoCollection', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(deviceInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
               if(data.acknowledged){
                form.reset();
                toast.success('Added Successfully');
               }
            })
    }


    return (
        <div>
            <div>
                <h1 className="text-4xl text-center my-5">You Phone Detail</h1>
            </div>
            <form className='w-full lg:w-1/2 mx-auto' onSubmit={handleAddDevice}>
            <input name="brandName" type="text" placeholder="Brand Name" className="input input-bordered input-primary w-full mb-2" required/>
            <input name="model" type="text" placeholder="Model" className="input input-bordered input-primary w-full mb-2" required />
            <input name="ram" type="text" placeholder="Ram" className="input input-bordered input-primary w-full mb-2" required />
            <input name="rom" type="text" placeholder="Rom" className="input input-bordered input-primary w-full mb-2" required />
            <input name="camera" type="text" placeholder="Camera detail" className="input input-bordered input-primary w-full mb-2" required />
            <input name="processor" type="text" placeholder="Processor" className="input input-bordered input-primary w-full mb-2" required />
            <select name='os' className="select select-bordered select-primary w-full mb-2" required>
                <option >Android</option>
                <option>Ios</option>
                </select>
            <select name='deviceType' className="select select-bordered select-primary w-full mb-2" required>
                <option >Smart Phone</option>
                <option>Tablet</option>
                </select>
            <input name="image" type="text" placeholder="Photo LINK" className="input input-bordered input-primary w-full mb-2"  required/>
            <input name="battery" type="text" placeholder="Battery" className="input input-bordered input-primary w-full mb-2"  required/>
            <input name="sellerName" type="text" defaultValue={user?.displayName} disabled placeholder="Seller Name" className="input input-bordered input-primary w-full mb-2"  required/>
            <input name="sellerEmail" type="email" defaultValue={user?.email} disabled placeholder="Seller Email Address" className="input input-bordered input-primary w-full mb-2"  required/>
            <input name="sellingReason" type="text" placeholder="Selling Reason" className="input input-bordered input-primary w-full mb-2"  required/>
            <input name="marketPrice" type="number" placeholder="Market Price $" className="input input-bordered input-primary w-full mb-2" required />
            <input name="sellingPrice" type="number" placeholder="Price you want $" className="input input-bordered input-primary w-full mb-2" required />
            <input name="postDate" type="date" placeholder="Today" className="input input-bordered input-primary w-full mb-2" required />
            <input name="usedTime" type="text" placeholder="You used this device for ? (in Month)" className="input input-bordered input-primary w-full mb-2" required />
            <input className="btn btn-primary w-full mb-5" type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default SellerAddPhone;