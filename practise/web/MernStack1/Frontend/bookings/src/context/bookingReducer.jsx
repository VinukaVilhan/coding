export const bookingReducer = (state, action) => {
    switch(action.type){
        case 'SET_BOOKINGS': 
        return {
            bookings: action.payload
        }
        case 'CREATE_BOOKING':
            return {
                bookings: [action.payload, ...state.bookings]
        }
        default:return state
    }
}