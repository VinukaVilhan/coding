const express = require('express')

//importing of the controllers
const { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } = require('../controllers/workoutControllers')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

//require auth for all the workouts
router.use(requireAuth)

//GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id',getWorkout)

//POST new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router