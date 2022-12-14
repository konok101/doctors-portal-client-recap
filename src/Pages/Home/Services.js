import React from 'react';
import floride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import cavity from '../../assets/images/cavity.png'
import treatment from '../../assets/images/treatment.png'
import Service from './Service';
import PrimaryButton from '../Shared/PrimaryButton';


const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'This is best service',
            img: floride
        },
        {
            _id: 1,
            name: ' Cavity',
            description: 'This is best service',
            img: cavity
        },
        {
            _id: 1,
            name: 'Whitening',
            description: 'This is best service',
            img: whitening
        },

    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h1 className='text-primary text-xl font-bold uppercase '>Our seervices</h1>
                <h2 className='text-4xl'>Services we provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service =>
                        <Service key={service._id}
                            service={service}></Service>)
                }
            </div>


            <div>

                <div className="hero min-h-screen  px-12 ps- ">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div>
                            <h1 className="text-5xl font-bold"> Your new smile start here!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <PrimaryButton>get started</PrimaryButton>
                        </div>

                        <div className='px-12'> 
                            <img width="300px" src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;