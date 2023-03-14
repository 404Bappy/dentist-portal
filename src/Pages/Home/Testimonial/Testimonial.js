import React from 'react';
import quote from '../../../assets/icons/quote.svg'

const Testimonial = () => {
    return (
        <section className='my-16'>
            <div>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimoinal</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img src={quote} alt="" />
                </figure>
            </div>

            <div>

            </div>
        </section>
    );
};

export default Testimonial;