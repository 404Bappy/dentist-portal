import React from 'react';

const AppointmentOption = ({ appointmentOptions, setTreatment }) => {
    const { name, Slots } = appointmentOptions;
    return (
        <div className="card  shadow-xl">
            <div className="card-body text-center ">
                <h2 className=" text-2xl font-bold  text-secondary text-center">{name}</h2>
                <p>{Slots.length > 0 ? Slots[0] : 'Try Another Day'}</p>
                <p>{Slots.length} {Slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div className="card-actions justify-center">

                    <label
                        disabled={Slots.length === 0}
                        htmlFor="booking-modal" className="btn btn-primary text-white font-bold"
                        onClick={() => setTreatment(appointmentOptions)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;