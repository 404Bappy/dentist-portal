import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='justify-center items-center rounded'>

            <div className="form-control items-center gap-5 rounded ">
                <h2 className='text-xl text-primary font-bold mt-5'>Contact Us</h2>
                <h1 className='text-white'>Stay Connected With Us</h1>

                <label>
                    <input className='rounded' type="text" placeholder="Email Address" />
                </label>

                <label>
                    <input className="rounded" type="text" placeholder="Subject" />
                </label>

                <label htmlFor="">
                    <textarea className="textarea textarea-info" placeholder="Your Message"></textarea>
                </label>

                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mb-5">Submit</button>
            </div>

        </section>
    );
};

export default Contact;