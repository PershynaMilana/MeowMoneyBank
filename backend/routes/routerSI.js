const express = require("express")
const router = express.Router();
const SourceIncome = require('../controllers/SourcesIncome')

router.post('/addSourceIncome', SourceIncome.addSourceIncome);
router.post('/delSourceIncome', SourceIncome.delSourceIncome);
router.post('/updateSourceIncome', SourceIncome.updateSourceIncome);
router.post('/getAllSourcesIncome', SourceIncome.getAllSourcesIncome);

module.exports = router

