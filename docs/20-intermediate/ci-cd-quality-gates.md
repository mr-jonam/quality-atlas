---
title: Puertas de calidad CI/CD / Puerta de calidad CI/CD
level: intermediate
roles: [qa-engineer, automation-engineer, test-lead, developer]
tags: [ci-cd, quality-gates, pipeline, feedback]
updated: 2026-09-21
---
# Puertas de calidad CI/CD / Puerta de calidad CI/CD


Un canal debe brindar retroalimentación rápida y confiable y respaldar una entrega segura. Una puerta es útil sólo cuando su señal es relevante, se comprende y se actúa en consecuencia.

### Comentarios en capas

1. Antes de la confirmación: formateador, análisis estático, comprobaciones locales enfocadas.
2. Solicitud de extracción: pruebas unitarias/componentes, análisis de seguridad y dependencia, pruebas de integración dirigidas.
3. Rama principal: controles más amplios de integración, contratos, migración y viajes críticos.
4. Despliegue: pruebas de humo, controles de salud, validación de configuración.
5. Producción: exposición progresiva, indicadores de nivel de servicio, alertas y señales de retroceso.

Realice las comprobaciones más rápidas de señal alta lo antes posible. Paralelizar el trabajo independiente. Almacene en caché con cuidado y haga visible la invalidación de caché. Separe una falla del producto de una falla del entorno o de la infraestructura.

No convierta todas las métricas en una puerta estricta. Las señales de advertencia pueden ser mejores cuando los umbrales son inmaduros. Revise la efectividad de la puerta preguntando qué detecta, retrasa, pasa por alto y hace que las personas pasen por alto.
