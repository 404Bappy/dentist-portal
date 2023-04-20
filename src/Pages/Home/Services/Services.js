import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png'
import Service from './Service';


const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride joins the tooth structure when your teeth develop, thus strengthening the teeth enamel, making them less susceptible to bacteria and cavities. It slows and may even reverse the development of decays and cavities by harming the bacteria which causes the cavities',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'This gives him or her enough time to take x-rays if needed, talk to you about the procedure and complete the dental work. Before filling cavities, your dentist will numb your teeth, gums and surrounding skin to avoid and lessen discomfort during the procedure.He or she will drill out the decay in the tooth and replace it with a filling. ',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Teeth whitening is a form of dentistry and should only be carried out by a dentist or another regulated dental professional, such as a dental hygienist or dental, on the prescription of a dentist.Some beauty salons offer teeth whitening, but this is illegal if theres no dental professional, and it may put your oral health at risk.',
            img: whitening
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>


            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row mt-10 p-20">
                    <img src={treatment} className=" rounded-lg lg:w-1/3 shadow-2xl" alt='' />
                <div className='w-'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque repudiandae, voluptas facere veritatis perspiciatis totam soluta sapiente veniam dicta similique quos aliquid odio suscipit! Ducimus debitis iste et perferendis corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos id porro facere pariatur qui vero voluptate nulla veritatis velit enim cum ab quidem ex, quaerat laborum voluptas praesentium maxime.</p>
                        <button className="btn btn-primary h-14 bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;