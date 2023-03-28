import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctors = () => {
    const { data: doctors, } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:9000/doctors', {
                    headers: {
                        auhorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;

            }
            catch (error) {

            }
        }
    })
    return (
        <div>
            <h2 className='text-3xl font-bold text-red-600'>Manage Doctors: {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map(doctor => <tr key={doctor._id}>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;