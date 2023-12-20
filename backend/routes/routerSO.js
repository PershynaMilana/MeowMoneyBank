const express = require("express")
const router = express.Router();
const SourceOutcome = require('../controllers/SourcesOutcome')

router.post('/addSourceOutcome', SourceOutcome.addSourceOutcome);
router.post('/delSourceOutcome', SourceOutcome.delSourceOutcome);
router.post('/updateSourceOutcome', SourceOutcome.updateSourceOutcome);
router.post('/getAllSourcesOutcome', SourceOutcome.getAllSourcesOutcome);

module.exports = router