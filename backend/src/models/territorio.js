const db = require('../../config/db');

const TerritorioModel = {
  findTerritorioInfoByNro: async (nroTerritorio) => {
    try {
        console.log("Holaaa")
      const result = await db.promise().query('SELECT nroTerritorio, cantManzanas, barrio FROM territorios WHERE nroTerritorio = ?', [nroTerritorio]);
      if (result.length === 0) {
        return null; 
      }

      return result[0][0];
    } catch (error) {
      throw error;
    }
  },

  findManzanasByTerritorioNro: async (nroTerritorio) => {
    try {
      const [rows] = await db.promise().query('SELECT nombreManzana FROM manzanasXterritorio WHERE nroTerritorio = ?', [nroTerritorio]);
      return rows.map(row => row.nombreManzana);
    } catch (error) {
      throw error;
    }
  },}

module.exports = TerritorioModel;
