const mongoose = require('mongoose')

module.exports = async() => {
    mongoose.connect(`mongodb+srv://DanilArtemNazar:8hYR81TKAfMggDFj@atlascluster.opbt4mf.mongodb.net/`)
    .then(() => {console.log("Connect to MongoDB")})
    .catch(err => console.log(err))
}


