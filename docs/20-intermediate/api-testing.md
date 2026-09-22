---
title: Pruebas de API y contratos
level: intermediate
roles: [qa-engineer, automation-engineer, developer]
tags: [api-testing, contracts, integration, data]
updated: 2026-09-21
---
# Pruebas de API y contratos


Las pruebas API proporcionan evidencia rápida y enfocada en los límites del servicio. Trate el contrato como un comportamiento, no sólo como un esquema.

### Examinar

- métodos, rutas, códigos de estado, encabezados y tipos de medios;
- campos obligatorios, opcionales, anulables, predeterminados y desconocidos;
- autenticación, autorización, arrendamiento y límites de tarifas;
- solicitudes válidas, inválidas, de límites, duplicadas y fuera de orden;
- paginación, filtrado, clasificación, idempotencia, tiempos de espera y reintentos;
- forma de error, identificadores de correlación y exposición de datos confidenciales;
- compatibilidad hacia atrás y hacia adelante para los consumidores.

Las pruebas de contrato verifican las suposiciones entre un proveedor y sus consumidores. Complementan, pero no reemplazan, las pruebas de integración y de extremo a extremo. Utilice la virtualización de servicios cuando una dependencia sea costosa o inestable, manteniendo al mismo tiempo un número menor de comprobaciones de integración reales para detectar desviaciones.
