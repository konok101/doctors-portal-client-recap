import React from 'react';
import InfoCard from './InfoCard';

import clock from './../../assets/icons/clock.svg'
import marker from './../../assets/icons/marker.svg'
import phn from './../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}/>
            <InfoCard cardTitle="Contact us" bgClass="bg-accent" img={ phn}/>
            <InfoCard cardTitle="  Our locations" bgClass=" bg-gradient-to-r from-secondary to-primary"  img={ marker}/>
            
        </div>
    );
};

export default Info;