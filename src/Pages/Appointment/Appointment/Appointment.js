import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    return (
        <div>
            <AppointmentBanner></AppointmentBanner>
            <AvailableAppointments></AvailableAppointments>
        </div>
    );
};

export default Appointment;