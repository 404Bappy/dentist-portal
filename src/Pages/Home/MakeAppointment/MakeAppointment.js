import React from 'react';
import doctor from '../../../assets/images/doctor.png'

const MakeAppointment = () => {
    return (
        <section className=''>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className="text-4xl font-bold">Make Aa Appointment Today !</h1>
                        <p className="py-6">Once you review your treatment plan with the dentist. Financing options such as CareCredit are available and all Gentle Dental locations accept Essential Dental, a discount dental plan that provides immediate coverage and discounts on all dental services. We can assist you in applying in the office. Our goal is to help you get the treatment you need quickly and comfortably.
                            Don’t forget to schedule your next hygiene appointment. Its a great way to make sure you stay on track with your dental health. When you provide us a cell phone and email address, you will receive text and email reminders of your upcoming appointments.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;