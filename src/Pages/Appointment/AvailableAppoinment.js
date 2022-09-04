 
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinment = ({ date }) => {

    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    })
    return (
        <div>

            <h1 className='text-xl text-secondary text-center'>Available Appoinments on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}

                    ></Service>)
                }
            </div>

            { treatment && <BookingModal
             date={date}
              treatment={treatment}
              setTreatment={setTreatment}
              ></BookingModal>}

        </div>
    );
};

export default AvailableAppoinment;