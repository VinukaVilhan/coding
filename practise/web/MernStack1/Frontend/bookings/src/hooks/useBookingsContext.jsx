import { bookingContext } from "../context/bookingContext";
import { useContext } from "react";

export const useBookingContext = () =>{
    const context = useContext(bookingContext)

    if(!context)
    {
        throw Error('useBookingContext must be used inside an BookingConextProvider')
    }

    return context
}