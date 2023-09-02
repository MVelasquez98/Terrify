const ResponsableModel = require('../models/responsable');

const ResponsableService = {
  getAllHabilitados: async () => {
    try {
      const result = await ResponsableModel.findAllHabilitados();
      const responsables = result[0].map(item => ({
        id: item.idResponsable,
        nombreCompleto: item.nombreCompleto
      }));
      return responsables;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = ResponsableService;
