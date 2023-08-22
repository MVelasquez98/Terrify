const ResponsableModel = require('../models/responsable');

const ResponsableService = {
  getAllHabilitados: async () => {
    try {
      const result = await ResponsableModel.findAllHabilitados();
      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = ResponsableService;
