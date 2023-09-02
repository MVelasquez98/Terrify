const TerritorioService = require('../services/territorioService');

const TerritorioController = {
    getTerritorioPorNro: async (req, res) => {
    try {
      const nroTerritorio = req.params.nroTerritorio;
      const territorioInfo = await TerritorioService.getTerritorioInfoByNro(nroTerritorio);
      res.json(territorioInfo);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la información del territorio.' });
    }
  },

  getManzanasPorNroTerritorio: async (req, res) => {
    try {
      const nroTerritorio = req.params.nroTerritorio;
      const manzanas = await TerritorioService.getManzanasByTerritorio(nroTerritorio);
      res.json(manzanas);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las manzanas.' });
    }
  },
};

module.exports = TerritorioController;
