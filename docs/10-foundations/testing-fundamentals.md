---
title: Fundamentos de pruebas
level: foundation
roles: [qa-analyst, qa-engineer, automation-engineer, developer]
tags: [testing, levels, types, lifecycle]
updated: 2026-09-21
---
# Fundamentos de pruebas


Las pruebas son un conjunto de actividades que se utilizan para descubrir información sobre un producto y sus riesgos. Una **verificación** compara un resultado observado con una expectativa explícita. **Exploración** combina aprendizaje, diseño de pruebas y ejecución en un circuito de retroalimentación.

### Niveles de prueba comunes

- **Unidad**: una pequeña pieza de lógica aislada.
- **Componente/servicio**: un subsistema implementable o significativo.
- **Integración**: interacciones a través de fronteras, como bases de datos, colas o servicios externos.
- **Sistema/de un extremo a otro**: comportamiento representativo en todo el sistema ensamblado.
- **Aceptación**: evidencia de que una solución respalda una necesidad empresarial o de usuario.

### Enfoques estáticos y dinámicos

Las pruebas estáticas revisan requisitos, ejemplos, códigos, modelos o diseños sin ejecutar el software. Las pruebas dinámicas observan la ejecución. Ambos pueden revelar problemas importantes tempranamente.

### Confirmación y regresión

Las pruebas de confirmación verifican si se solucionó un problema informado. Las pruebas de regresión buscan impactos no deseados en otros lugares. Un conjunto de regresión debería evolucionar con el riesgo; no es un archivo de todas las pruebas jamás escritas.

Relacionado: [[test-design-techniques]], [[../20-intermediate/automation-engineering]].
