const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sourcesIncome = new Schema({
    name : {
        type:String,
        required: true,
    },
    price : {
        type:Number,
        min : 0,

    }
})

module.exports = mongoose.model('sourcesIncome', sourcesIncome)