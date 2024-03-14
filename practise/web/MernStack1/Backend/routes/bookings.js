const express = require('express')

//importing of the controllers
const { createBooking, getBooking, getBookings, deleteBooking, updateBooking } = require('../controllers/bookingControllers')
const router = express.Router()

//GET all workouts
router.get('/', getBookings)

//GET a single workout
router.get('/:id',getBooking)

//POST new workout
router.post('/', createBooking)

//DELETE a workout
router.delete('/:id', deleteBooking)

//UPDATE a workout
router.patch('/:id', updateBooking)

module.exports = router