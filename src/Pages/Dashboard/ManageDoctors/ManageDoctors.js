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
        </div>
    );
};

export default ManageDoctors;