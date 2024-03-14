import { useState } from "react";
import Button from '@mui/material/Button';
import { useBookingContext } from "../hooks/useBookingsContext";


export default function BookingForm() {

    const{dispatch} = useBookingContext('')
    const [customerName, setCustomerName] = useState('');
    const [food, setFood] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        const booking = { customerName, food, roomNumber, checkInDate, checkOutDate, numberOfGuests };

        const response = await fetch('http://localhost:4000/api/bookings', {
            method: 'POST',
            body: JSON.stringify(booking),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setCustomerName('');
            setFood('');
            setRoomNumber('');
            setCheckInDate('');
            setCheckOutDate('');
            setNumberOfGuests('');
            setError(null);
            console.log('New booking added');
            console.log(json);
            dispatch({type: 'CREATE_BOOKING', payload: json})
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="customerName">Customer Name</label>
                <input id="customerName" type="text" onChange={(evt) => setCustomerName(evt.target.value)} value={customerName} required />

                <label htmlFor="food">Food</label>
                <input id="food" type="text" onChange={(evt) => setFood(evt.target.value)} value={food} required />

                <label htmlFor="roomNumber">Room Number</label>
                <input id="roomNumber" type="number" onChange={(evt) => setRoomNumber(evt.target.value)} value={roomNumber} required />

                <label htmlFor="checkInDate">Check-In Date</label>
                <input id="checkInDate" type="date" onChange={(evt) => setCheckInDate(evt.target.value)} value={checkInDate} required />

                <label htmlFor="checkOutDate">Check-Out Date</label>
                <input id="checkOutDate" type="date" onChange={(evt) => setCheckOutDate(evt.target.value)} value={checkOutDate} required />

                <label htmlFor="numberOfGuests">Number of Guests</label>
                <input id="numberOfGuests" type="number" onChange={(evt) => setNumberOfGuests(evt.target.value)} value={numberOfGuests} required />

                <Button variant="contained" type="submit">Submit</Button>

                {error && <div className="error">{error}</div>}
            </form>
        </>
    );
}
