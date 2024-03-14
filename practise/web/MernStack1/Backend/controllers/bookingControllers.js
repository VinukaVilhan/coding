const Booking = require('../models/bookingModels')
const mongoose = require('mongoose')

//get all workouts
const getBookings  = async (req,res)=>{
    const bookings = await Booking.find({}).sort({createdAt: -1})

    res.status(200).json(bookings)
}

//get a single workout
const getBooking= async (req ,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'No such Booking'})
    }

    const booking = await Booking.findById(id)

    if(!booking)
    {
        return res.status(404).json({error:'No such booking'})
    }

    res.status(200).json(booking)
}

//create a new workout
const createBooking = async (req,res)=>{
    const {customerName,food,roomNumber,checkInDate,checkOutDate,numberOfGuests} = req.body
    
    //add doc to 
    try{
        const booking  = await Booking.create({customerName,food,roomNumber,checkInDate,checkOutDate,numberOfGuests})
        res.status(200).json(booking)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}
//delete a workout
const deleteBooking = async (req, res)=>{
    const{id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Booking"})
    }

    const booking = await Booking.findOneAndDelete({_id:id})

    if(!booking)
    {
        return res.status(404).json({error:'No such booking'})
    }

    res.status(200).json(booking)

}

//update a workout
const updateBooking = async (req, res) =>
{
    const{id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Booking"})
    }

    const booking = await Booking.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!booking)
    {
        return res.status(404).json({error:'No such Booking'})
    }

    res.status(200).json(booking)

}

//exporting
module.exports = {
    createBooking,
    getBooking,
    getBookings,
    deleteBooking,
    updateBooking
}