const SourceOfIncome = require("../models/SourceOfIncome")

module.exports.addSourceIncome = async(req, res) => {
    try {
        const sourceOfIncomeAdd = await new SourceOfIncome({
            name : req.body.name,
            price : req.body.price
        })
    
        await sourceOfIncomeAdd.save()
    
        res.json(`${sourceOfIncomeAdd.name} додано!`)
    }
    catch (e) {
        res.json(e)
    }
    
}

module.exports.delSourceIncome = async(req, res) => {
    try {
        await SourceOfIncome.deleteMany({
            name : req.body.name
        })

        res.json(`${req.body.name} видалено!`)
    }
    catch(e) {
        res.json(e)
    }
}

module.exports.updateSourceIncome = async(req, res) => {
    try {

    }
    catch(e) {
        res.json(e)
    }
}