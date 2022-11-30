import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllReport = () => {
    const { data: reports = [] } = useQuery({
        queryKey: ['report'],
        queryFn: async() =>{
            const res = await fetch('https://mobile-phone-resale-server.vercel.app/report');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
        <h3 className="text-4xl m-5">Reports</h3>
        <div className="overflow-x-auto">
        <table className="table w-full my-5">
        <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Deails</th>
        </tr>
        </thead>
        <tbody>
        {
            reports.map((report, i) =><tr key={i}>
            <th>{i+1}</th>
            <td>{report.name}</td>
            <td>{report.email} </td>
            <td>{report.details}</td>
         </tr>
            
            )
        }
        </tbody>
    </table>
    </div>
        </div>
    );
};

export default AllReport;