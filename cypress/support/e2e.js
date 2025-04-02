// Importar commands.js usando sintaxis ES2015:
import './commands'

// Alternativamente puedes usar sintaxis CommonJS:
// require('./commands')

// Ocultar solicitudes XHR del registro de comandos
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

// Aquí puedes agregar más configuración global y comportamiento que modifique Cypress. 