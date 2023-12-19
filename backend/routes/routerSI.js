const express = require("express")
const router = express.Router();
const SourceIncome = require('../controllers/SourcesIncome')

router.post('/addSourceIncome', SourceIncome.addSourceIncome)

module.exports = router

