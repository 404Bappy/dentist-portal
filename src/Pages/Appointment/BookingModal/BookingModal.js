import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {

    const { name: treatmentName, Slots, price } = treatment; //treatment is just another name of appointment options with name, slots, _id//
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);
    const [cancelModal, setCancelModal] = useState(false)

    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }
        //TODO : Send Data to the server & once  data is saved then close the modal and display success toast //
        fetch('http://localhost:9000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })

        setTreatment(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    {!cancelModal && <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
                        <select name='slot' className="select select-bordered w-full">

                            {
                                Slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" defaultValue={user?.email} disabled readOnly placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>}
                    {cancelModal && <div className=''>
                        <ul className='gap-3 uppercase'>
                            <li>policy 1</li>
                            <li>policy 2</li>
                            <li>policy 3</li>
                        </ul>
                        <button className='btn btn-primary mt-4 w-full text-white' onClick={() => setCancelModal(!cancelModal)}>Back</button>

                    </div>}

                    {!cancelModal && <button className='btn btn-primary mt-4 w-full text-white' onClick={() => setCancelModal(true)}>Cancelation Policy</button>}
                </div>
            </div>


        </>
    );
};

export default BookingModal;