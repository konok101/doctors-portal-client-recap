import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({date}) => {
    return (
        <div>

            <h1>Available Appoinments on {format(date, 'PP')}</h1>
            
        </div>
    );
};

export default AvailableAppoinment;