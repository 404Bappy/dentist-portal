import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    console.log('booking', booking);
    return (
        <div>
            <h3 className='text-3xl mt-6'>Payment</h3>
        </div>
    );
};

export default Payment;