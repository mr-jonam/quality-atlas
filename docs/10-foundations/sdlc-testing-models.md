---
title: SDLC y modelos de prueba
level: foundation
roles: [qa-analyst, qa-engineer, automation-engineer, test-lead, developer, product]
tags: [sdlc, agile, verification, validation, testing-approaches]
updated: 2026-09-22
---
# SDLC y modelos de prueba


Un modelo de entrega determina cuándo está disponible la información y qué tan costosa es la retroalimentación. Las pruebas se adaptan a ese modelo; no es una fase final agregada después de la implementación.

### Modelos comunes

- Los enfoques **secuenciales** planifican distintas fases. Se benefician de revisiones tempranas, trazabilidad explícita y ensayos de integración realistas.
- El pensamiento **modelo V** combina actividades de desarrollo con las correspondientes actividades de verificación o validación.
- Los enfoques **iterativos e incrementales** ofrecen porciones, aprenden de los comentarios y revisan los planes.
- **Métodos ágiles** enfatizan los lotes pequeños, la colaboración y la adaptación. Scrum, Kanban y XP son modelos operativos diferentes, no técnicas de prueba.
- **La entrega continua** mantiene el software disponible a través de la automatización, la observabilidad y la gestión disciplinada del cambio.

La verificación pregunta si los productos de trabajo cumplen con las condiciones específicas. La validación pregunta si el producto resultante sirve a los usuarios y al contexto previstos. Ambos requieren juicio; ninguno se limita a ejecutar pruebas.

Elija técnicas de caja negra cuando el comportamiento y las interfaces sean el foco, técnicas de caja blanca cuando la estructura sea visible y técnicas basadas en la experiencia cuando los modelos estén incompletos. Combínalos cuando el riesgo lo justifique.

Relacionado: [[testing-fundamentals]], [[test-design-techniques]], [[../20-intermediate/ci-cd-quality-gates]].
