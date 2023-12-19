const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sourcesOutcome = new Schema({
    name : {
        type:String,
        required: true,
    },
    price : {
        type:Number,
        min : 0,

    }
})