const { startWebServer } = require('../../app');
const startDatabase = require('./database');

(async () => {
  // Iniciar el servidor y la base de datos
  const db = await startDatabase();
  console.log(db);
  await startWebServer();
  console.log('Server started');
})();
