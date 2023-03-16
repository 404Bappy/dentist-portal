import React from 'react';

const AppointmentOption = ({ appointmentOptions }) => {
    const { name, Slots } = appointmentOptions;
    return (
        <div className="card  shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{Slots.length > 0 ? Slots[0]: 'Try Another Day'}</p>
                <p>{Slots.length} {Slots.length >1 ? 'Spaces' : 'Space'} Available</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;