const express = require('express'),
router = express.Router()

import home from '../controllers/home'

router.get('/', home)

module.exports = router