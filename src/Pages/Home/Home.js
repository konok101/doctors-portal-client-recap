import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';


 

const Home = () => {
    return (
        <div className='px-12'>
        <Banner></Banner>
        <Info/>
        <Services/>
        <MakeAppoinment/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        </div>
    );
};

export default Home;