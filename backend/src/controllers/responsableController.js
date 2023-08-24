const ResponsableService = require('../services/responsableService');

const ResponsableController = {
  getHabilitados: async (req, res) => {
    try {
      const responsablesData = await ResponsableService.getAllHabilitados();
      const responsables = responsablesData[0].map(item => item.nombreCompleto);
      res.json(responsables);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los responsables habilitados.' });
    }
  },
};

module.exports = ResponsableController;

