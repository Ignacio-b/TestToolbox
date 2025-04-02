// Importar commands.js usando sintaxis ES2015:
import './commands'

const app = window.top;
if (app) {
  app.console.log = () => {};
}
// Ocultar solicitudes fetch del registro de comandos
const originalFetch = window.fetch;
window.fetch = function() {
  return originalFetch.apply(this, arguments).then(response => {
    return response;
  });
};

