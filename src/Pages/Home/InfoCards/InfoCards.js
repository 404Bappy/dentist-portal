import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm Everyday',
            Icon: clock,
            bgclass: 'bg-primary'
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Open 9.00 am to 5.00pm Everyday',
            Icon: marker,
            bgclass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us Now',
            description: 'Open 9.00 am to 5.00pm Everyday',
            Icon: phone,
            bgclass: 'bg-primary'
        }
    ]
    return (
        <div>
            <h3>hstjtrnssfjjyjfdghj</h3>
        </div>
    );
};

export default InfoCards;