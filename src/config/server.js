const startServer = require('./express')
const startDatabase = require('./database')
(async () => {
  // Iniciar el servidor y la base de datos
  await startDatabase()
  startServer()
})