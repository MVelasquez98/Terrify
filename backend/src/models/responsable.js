const db = require('../../config/db');
const ResponsableModel = {
  findAllHabilitados: () => {
    return db.promise().query('SELECT idResponsable, nombreCompleto FROM responsables WHERE habilitado = 1');
  },
};

module.exports = ResponsableModel;

