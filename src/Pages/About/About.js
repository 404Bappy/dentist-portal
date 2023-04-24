import React from 'react';
import BannerAbout from '../../assets/images/BannerAbout.png';
import rightAbout from '../../assets/images/rightAbout.png';
import servicess from '../../assets/images/servicess.png';
import srvs from '../../assets/images/srvs.jpg';
import slide from '../../assets/images/slide.jpg';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div>
                <img src={BannerAbout} alt="" />
            </div>

            <div style={{ display: 'flex', marginTop: '100px' }} >
                <div style={{ marginLeft: '130px' }}>
                    <h1 className='text-success text-xl mt-20 font-bold '>Dentist Portal</h1>
                    <h1 className='text-3xl mt-4'>Creating Beautiful Smiles Since 1999</h1>
                    <p className='text-xl mt-2'>Dentist Portal is a modern dental clinic, specialised in advanced diagnostics and treatment of dental disorders. We guarantee comprehensive diagnostics and offer various forms of dental care, surgical procedures, and cosmetic dental services.</p>
                </div>
                <div className='mr-40 '>
                    <img width={1000} height={1000} src={rightAbout} alt="" />
                </div>
            </div>
            <div className='mt-6'>
                <img src={srvs} alt="" />
            </div>

            <div style={{ display: 'flex', marginTop: '60px', gap: '30px', marginBottom: '50px' }}>
                <div className='ml-40 ' >
                    <img width={1500} height={1500} src={servicess} alt="" />
                </div>
                <div className='mr-40'>
                    <div>
                        <h1 className='text-xl text-success'>OUR MISSION</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam massa ligula, aliquet euismod eleifend vitae, interdum ut mi. Praesent fringilla pharetra sapien sit amet semper. Nunc id massa ut mi tempus mattis ac eu lectus. Praesent egestas eleifend porta. Sed posuere venenatis libero quis tempor. Nulla metus mi, malesuada eu risus nec, placerat imperdiet ex. Nam sit amet arcu id risus varius mattis vel sit amet lectus. Sed sit amet tempus purus. Morbi molestie ex quis vehicula sodales.</p>
                    </div>
                    <div>
                        <h1 className='text-xl mt-10 text-success'>OUR APPROACH</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam massa ligula, aliquet euismod eleifend vitae, interdum ut mi. Praesent fringilla pharetra sapien sit amet semper. Nunc id massa ut mi tempus mattis ac eu lectus. Praesent egestas eleifend porta. Sed posuere venenatis libero quis tempor. Nulla metus mi, malesuada eu risus nec, placerat imperdiet ex. Nam sit amet arcu id risus varius mattis vel sit amet lectus. Sed sit amet tempus purus. Morbi molestie ex quis vehicula sodales.</p>
                    </div>

                </div>
            </div>

            <div style={{
                background: `url(${slide})`

            }}>
                <div >
                    <h1 className='text-4xl mt-20  pt-10 text-center'>Schedule a Complimentary Consultation</h1>
                    <h1 className='text-4xl mt-20  text-center'>Consultation</h1>
                </div>
                <div className='mt-80 text-center pb-10'>
                    <Link to='/appointment'>
                        <PrimaryButton >Book An Appointment Now</PrimaryButton>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default About;