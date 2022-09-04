import React from 'react';
import doctor from '../../assets/images/doctor.png'
import apoinment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
 
const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${apoinment})`
        }} 
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold'>Appoinment</h3>
                <h2 className='text-4xl text-white py-5'>Make an Appoinment today</h2>
                <p className='text-white pb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis sint neque ducimus, sapiente voluptate velit deleniti? Tempore debitis suscipit harum voluptas delectus cum, voluptatum ratione. Consequatur nihil dicta dolorem adipisci, expedita deleniti, quam tempore quaerat voluptatibus, aspernatur voluptate error qui?</p>
                <PrimaryButton>get sarted</PrimaryButton>
            </div>

        </section>
    );
};

export default MakeAppoinment;