const express = require('./src/config/express');

/**
 * @description Normaliza el puerto en el que el server correrá
 * @param port - El puerto string o number en el que el server correrá
 * @returns El puerto en numero o false si no es un numero
 */
function normalizePort(port) {
  const PORT = parseInt(port, 10);
  if (Number.isNaN(PORT)) {
    return port;
  }

  if (PORT >= 0) {
    return PORT;
  }

  return false;
}

/**
 * @description Configura el puerto en el que el server correrá e inicia el
 * server previamente configurado
 * @returns A promise that resolves to a function that starts the web server.
 */
async function startWebServer() {
  const port = normalizePort(process.env.PORT || '8080');
  const app = express();

  const server = () => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  };

  return new Promise((resolve) => {
    resolve(server());
  });
}

// async function stopwebServer() {
//   return new Promise((resolve, reject) => {});
// }

module.exports = {
  startWebServer,
  // stopwebServer,
};
