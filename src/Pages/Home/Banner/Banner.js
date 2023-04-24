import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero  mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img height={700} width={700} src={chair} alt='' />
                <div>
                    <h1 className="text-5xl font-bold text-success">A Warm Welcome and a Beautiful Smile!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;