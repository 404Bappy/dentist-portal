import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    return (
        <div>
            <p className='text-red-500'>Something went Wrong !!!</p>
            <p className='text-red-400'></p>
        </div> 
    );
};

export default DisplayError;