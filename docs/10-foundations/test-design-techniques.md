---
title: Técnicas de diseño de pruebas
level: foundation
roles: [qa-analyst, qa-engineer, developer]
tags: [test-design, equivalence-partitioning, boundaries, state, pairwise]
updated: 2026-09-21
---
# Técnicas de diseño de pruebas


Las técnicas reducen la selección arbitraria de pruebas. Combínalos según el riesgo y modelo disponible.

- **Partición de equivalencia**: se espera que las entradas del grupo se comporten de manera similar; muestree cada grupo significativo.
- **Análisis de valor límite**: verifique en, justo debajo y justo encima de límites significativos.
- **Tablas de decisión**: asignar combinaciones de condiciones a resultados; útil para reglas de negocio.
- **Pruebas de transición de estado**: estados del modelo, eventos válidos, eventos no válidos y estados resultantes.
- **Prueba de escenario**: siga recorridos realistas del usuario o del sistema a través de las funciones.
- **Prueba por pares/combinatoria**: cubre las interacciones entre parámetros sin probar cada combinación.
- **Adivinación de errores**: use la experiencia para identificar fallas probables y luego haga explícita la heurística.

### Mini ejemplo

Una regla de reserva ficticia acepta de 1 a 8 asientos. Las particiones útiles incluyen debajo de 1, válidas de 1 a 8 y arriba de 8. Los límites incluyen 0, 1, 8 y 9. Agregue casos no numéricos, vacíos, de envío repetido y de concurrencia solo cuando representen riesgos relevantes.
