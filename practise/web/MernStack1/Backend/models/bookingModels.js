const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    customerName: {
        type: String,
        required: true
    },
    food:{
        type:String,
        required:true
    },
    roomNumber: {
        type: Number,
        required: true
    },
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    numberOfGuests: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Bookings', bookingSchema);
