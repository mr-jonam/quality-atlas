---
title: Pruebas de rendimiento y confiabilidad
level: advanced
roles: [qa-engineer, automation-engineer, test-lead, developer]
tags: [performance-testing, reliability, resilience, load-testing]
updated: 2026-09-21
---
# Pruebas de rendimiento y confiabilidad


Comience con un modelo de carga de trabajo basado en recorridos esperados, patrones de llegada, tamaños de datos, simultaneidad, geografía y dependencias. Un recuento de tráfico generado por una herramienta no es un modelo de carga de trabajo.

### Tipos de experimentos de rendimiento

- línea de base y punto de referencia para comparación;
- carga para la demanda esperada;
- estrés para localizar límites y modos de falla;
- pico para cambios repentinos;
- resistencia a fugas, saturación y degradación;
- capacidad de altura de planificación.

Mida las distribuciones de latencia, el rendimiento, los errores, la saturación, las colas, el uso de recursos y el comportamiento posterior. El calentamiento, los datos de prueba, el estado de la caché, la red y la sobrecarga de observabilidad pueden cambiar los resultados. Repita experimentos controlados y conserve la configuración con los resultados.

Las pruebas de confiabilidad también examinan fallas de dependencia, tormentas de reintentos, degradación parcial, conmutación por error, recuperación, integridad de los datos y respuesta del operador. Los experimentos del caos requieren una hipótesis, controles del radio de explosión, observabilidad, condiciones de aborto y aprobación informada.
