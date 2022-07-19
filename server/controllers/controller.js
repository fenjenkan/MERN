const Workout = require('../models/workoutsModel.js')
const mongoose = require('mongoose')
//get all workouts
const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({}).sort({createAt: -1})
    res.status(200).json(workouts)
}


//get a single workout
const getWorkout = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No found"})
    }

    const workout = await Workout.findById(id)
    if (!workout){
        return res.status(404).json({error: " no found"})
    }

    res.status(200).json(workout)

}


//create new workout
const createWorkout = async (req,res) => {
    const {title,load,reps} = req.body;
    try {
        const workout = await Workout.create({
            title,load,reps
        })
        res.status(202).json(workout)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
    res.json({mssg:'Post new route'})
}

//Delete workout

const deleteWorkout = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No found"})
    }

    const workout = await Workout.findByIdAndDelete({_id: id})

    if (!workout){
        return res.status(404).json({error: " no found"})
    }

    res.status(200).json(workout)
}


//update workouts

const updateWorkout = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No found"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if (!workout){
        return res.status(404).json({error: " no found"})
    }

    res.status(200).json(workout)
}


module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}