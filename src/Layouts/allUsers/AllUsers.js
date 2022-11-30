import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';


const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = id => {
        fetch(`http://localhost:5000/users/delete/${id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                toast.success('User Deleted')
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
            users.map((user, i) =><tr key={i}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email} </td>
            <td>{user.userType}</td>
            <td><button onClick={() => handleDelete(user._id)} className='btn btn-xs btn-danger'>delete</button></td>
         </tr>
            
            )
        }
        </tbody>
    </table>
    </div>
        </div>
    );
};

export default AllUsers;