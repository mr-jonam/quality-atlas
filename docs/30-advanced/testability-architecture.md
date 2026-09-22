---
title: Probabilidad y arquitectura
level: advanced
roles: [qa-engineer, automation-engineer, test-lead, developer]
tags: [testability, architecture, observability, controllability]
updated: 2026-09-21
---
# Probabilidad y arquitectura


La capacidad de prueba es el grado en que un sistema respalda una investigación y evaluación eficientes. Es una propiedad arquitectónica, no sólo una preocupación de prueba.

### Palancas de diseño

- **Observabilidad**: registros, métricas, seguimientos, eventos e inspección de estado significativos.
- **Controlabilidad**: entradas deterministas, relojes, indicadores de funciones, sustitución de dependencias y estado reiniciable.
- **Descomposabilidad**: límites que permiten controles enfocados.
- **Reproducibilidad**: configuración versionada, generadores de datos y condiciones capturadas.
- **Comprensibilidad**: contratos explícitos, modelos y semántica de fallos.

Evite agregar puertas traseras de producción inseguras para las pruebas. Las interfaces de diagnóstico necesitan controles de autenticación, autorización, auditoría y entorno.

### Mensajes de revisión de arquitectura

¿Se puede localizar una falla? ¿Se pueden controlar el tiempo y la aleatoriedad? ¿Pueden las dependencias fallar de manera predecible en un entorno de prueba? ¿Se pueden crear y eliminar datos de forma segura? ¿Se puede exponer un cambio progresivamente y revertirlo? ¿Pueden los consumidores verificar la compatibilidad antes de la implementación?
