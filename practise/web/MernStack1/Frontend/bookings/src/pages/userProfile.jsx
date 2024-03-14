
import { useEffect, useState } from "react";
import BookingDetails from "../Details/bookingDetails";

const UserBookings = () => {

    const [bookings, setBookings] = useState(null)

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/workouts')
                const json = await response.json()
                if (response.ok) {
                    setBookings(json)
                }
            } catch (error) {
                console.error('Error fetching Bookings:', error)
            }
        }
    
        fetchBookings()
    }, [])
    

    console.log(bookings)

    return (
        <div className="Profile">
        
                {bookings && bookings.map((booking)=> (
                    <BookingDetails key={booking._id} workout ={booking}/>
                ))}
            </div>
            
    )
}
export default UserBookings