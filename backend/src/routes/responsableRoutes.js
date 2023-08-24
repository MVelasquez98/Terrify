const express = require('express');
const router = express.Router();
const ResponsableController = require('../controllers/responsableController');

router.get('/habilitados', ResponsableController.getHabilitados);

module.exports = router;
