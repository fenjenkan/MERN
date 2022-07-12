const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type:String,
        require:true
    },
    reps:{
        type:String,
        require:true
    },
    load:{
        type:Number,
        require:true
    },


},{timestamps:true});

module.exports = mongoose.model('workout', workoutSchema)

