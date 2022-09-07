import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { name, slots } = treatment;
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot)
        setTreatment(null);

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary text-lg"> Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" value={format(date, 'PP')} disabled className=" input input-bordered input-info w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }


                        </select>
                        <input type="text" name='name ' placeholder="Your name" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="text" name='email' placeholder="Email address" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="phone number" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="submit" value="submit" className=" btn btn-secondary input-info w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;