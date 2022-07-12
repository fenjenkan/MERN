const express = require('express')
const {createWorkout} = require('../controllers/controller.js')


const router = express.Router()
//get all
router.get('/',(req,res) => {
    res.json({mssg:'Get all routes'})
})
//ger a single
router.get('/:id', (req,res) => {
    res.json({mssg:'Get single route'})
})
//post route
router.post('/', createWorkout)
//Delete
router.delete('/:id', (req,res) => {
    res.json({mssg:'Delete new route'})
})

//update
router.patch('/:id', (req,res) => {
    res.json({mssg:'update a route'})
})

module.exports = router