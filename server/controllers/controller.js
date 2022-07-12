const Workout = require('../models/workoutsModel.js')




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


module.exports = {
    createWorkout
}