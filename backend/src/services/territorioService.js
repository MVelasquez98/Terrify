const TerritorioModel = require('../models/territorio');

const TerritorioService = {
    getTerritorioInfoByNro: async (nroTerritorio) => {
    try {
      const territorioInfo = await TerritorioModel.findTerritorioInfoByNro(nroTerritorio);
      return territorioInfo;
    } catch (error) {
      throw error;
    }
  },

  getManzanasByTerritorio: async (nroTerritorio) => {
    try {
      const territorio = await TerritorioModel.findTerritorioInfoByNro(nroTerritorio);

      if (!territorio) {
        throw new Error('El territorio no existe.');
      }
      const manzanas = await TerritorioModel.findManzanasByTerritorioNro(nroTerritorio);
      return manzanas;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = TerritorioService;
