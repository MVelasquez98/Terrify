const db = require('../../config/db');
const ResponsableModel = {
  findAllHabilitados: () => {
    return db.promise().query('SELECT nombreCompleto FROM responsables WHERE habilitado = 1');
  },
};

module.exports = ResponsableModel;

