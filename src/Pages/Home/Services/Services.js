import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';


const Services = () => {
    const servicesData = [
        {
            id: 1,
            Name: 'Fluoride Treatment',
            description: 'ajkgfjafsrngafsg asgslfhgs fdsfdslk;fds fhuAFDSNGVJF GAJDHSG',
            img: fluoride
        },
        {
            id: 2,
            Name: 'Cavity Filling',
            description: 'ajkgfjafsrngafsg asgslfhgs fdsfdslk;fds fhuAFDSNGVJF GAJDHSG',
            img: cavity
        },
        {
            id: 3,
            Name: 'Teeth Whitening',
            description: 'ajkgfjafsrngafsg asgslfhgs fdsfdslk;fds fhuAFDSNGVJF GAJDHSG',
            img: whitening
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;