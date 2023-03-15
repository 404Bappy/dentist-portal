import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ selectedDate }) => {
    return (
        <div>
            <p className='text-center text-secondary font-bold'>Available Appointment on {format(selectedDate, 'PP')}</p>
        </div>
    );
};

export default AvailableAppointments;