const express = require('express');
const router = express.Router();
const TerritorioController = require('../controllers/territorioController');

router.get('/:nroTerritorio', TerritorioController.getTerritorioPorNro);
router.get('/:nroTerritorio/manzanas', TerritorioController.getManzanasPorNroTerritorio);

module.exports = router;
