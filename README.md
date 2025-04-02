# Challenge Toolbox - Pruebas de Automatización con Cypress

Este proyecto contiene pruebas de automatización implementadas con Cypress para la aplicación de ecommerce Automation Exercise.

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Instalar dependencias:
```bash
npm install
```

## Estructura del Proyecto

```
cypress/
├── e2e/                    # Tests de UI
│   └── auth.cy.js         # Tests de autenticación
├── fixtures/              # Datos estáticos
└── support/               # Comandos personalizados y configuración
    └── commands.js        # Comandos personalizados de Cypress
```

## Ejecutar Tests

Para abrir Cypress Test Runner:
```bash
npm run cypress:open
```

Para ejecutar tests en modo headless:
```bash
npm run cypress:run
```

## Tests Implementados

### Autenticación
- Registro de nuevo usuario
- Login exitoso
- Validación de credenciales inválidas

## Consideraciones

- Los tests están diseñados para ejecutarse contra la aplicación de prueba en https://automationexercise.com/
- Se recomienda ejecutar los tests en un entorno de prueba
- Los datos de prueba se generan dinámicamente para evitar conflictos 