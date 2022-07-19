const express = require('express')
const {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout} = require('../controllers/controller.js')


const router = express.Router()
//get all
router.get('/', getWorkouts)
//ger a single
router.get('/:id',getWorkout)
//post route
router.post('/', createWorkout)
//Delete
router.delete('/:id', deleteWorkout)

//update
router.patch('/:id', updateWorkout)

module.exports = router