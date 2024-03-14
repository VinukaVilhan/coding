import { createContext, useReducer } from "react";
import { bookingReducer } from "./bookingReducer";
import PropTypes  from "prop-types";

export const BookingContext = createContext()

export const BookingContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(bookingReducer, {
        bookings:null
    })

    return (
        <BookingContext.Provider value={{...state, dispatch}}>
            {children}
        </BookingContext.Provider>
    );
}


BookingContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
    }