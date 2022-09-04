import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppoinment from './AvailableAppoinment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}/>
            <AvailableAppoinment date={date}   />
            <Footer></Footer>
        </div>
    );
};

export default Appointment;