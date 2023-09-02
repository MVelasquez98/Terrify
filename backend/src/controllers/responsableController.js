const ResponsableService = require('../services/responsableService');

const ResponsableController = {
  getHabilitados: async (req, res) => {
    try {
      const responsables = await ResponsableService.getAllHabilitados();
      res.json(responsables);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los responsables habilitados.' });
    }
  },
};

module.exports = ResponsableController;

