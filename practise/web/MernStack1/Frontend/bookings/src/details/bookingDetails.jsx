import PropTypes from "prop-types";
import { useBookingContext } from "../hooks/useBookingsContext";

export default function BookingDetails({booking}) {
    return(
        <>
            <h3>{booking.roomNumber}</h3>
        </>
    );
}

