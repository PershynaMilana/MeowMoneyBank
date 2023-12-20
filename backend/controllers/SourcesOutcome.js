const SourceOfOutcome = require("../models/SourceOfOutcome")

module.exports.addSourceOutcome = async(req, res) => {
    try {
        const sourceOfOutcomeAdd = await new SourceOfOutcome({
            name : req.body.name,
            price : req.body.price
        })
    
        await sourceOfOutcomeAdd.save()
    
        res.json(`${sourceOfOutcomeAdd.name} додано!`)
    }
    catch (e) {
        res.json(e)
    }
    
}

module.exports.delSourceOutcome = async(req, res) => {
    try {
        await SourceOfOutcome.deleteMany({
            name : req.body.name
        })

        res.json(`${req.body.name} delete!`)
    }
    catch(e) {
        res.json(e)
    }
}

module.exports.updateSourceOutcome = async(req, res) => {
    try {
        const updateSourceOutcome = {
            name : req.body.name,
            price : req.body.price
        }

        const updtSourceOutcome = await SourceOfOutcome.findOneAndUpdate(
            {
                name : req.body.oldname
            },
            {
                $set:updateSourceOutcome
            },
            {
                new:true
            }
        ) 

        res.json(`${updtSourceOutcome.name} updated!`)
    }
    catch(e) {
        res.json(e)
    }
}

module.exports.getAllSourcesOutcome = async(req, res) => {
    try {
        const sourcesOutcome = SourceOfOutcome.find({})
    }
    catch(e) {

    }
}