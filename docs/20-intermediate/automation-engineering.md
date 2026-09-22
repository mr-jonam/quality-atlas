---
title: Ingeniería de automatización de pruebas
level: intermediate
roles: [qa-engineer, automation-engineer, developer]
tags: [test-automation, maintainability, test-pyramid, flakiness]
updated: 2026-09-21
---
# Ingeniería de automatización de pruebas


La automatización es un software que genera retroalimentación. Su valor depende de la capacidad de detección, la velocidad, la confianza, el costo de mantenimiento y la claridad del diagnóstico.

### Heurística de selección

Automatizar cuando se repite una verificación es lo suficientemente determinista, valioso cuando se ejecuta con frecuencia y más barato de mantener que sus alternativas. Mantenga la exploración dirigida por humanos en busca de novedades, ambigüedades, usabilidad y comportamientos inesperados.

Prefiera muchas comprobaciones rápidas cercanas a la lógica, comprobaciones de contratos y servicios centrados y un pequeño conjunto de recorridos de usuario críticos. La forma es contextual, no una cuota.

### Diseño para la confianza

- controlar datos y aislar estado;
- esperar condiciones observables, no tiempo arbitrario;
- afirmar resultados significativos en lugar de detalles de implementación;
- mantener los fallos independientes y sin orden alguno;
- producir diagnósticos concisos y preservar los artefactos relevantes;
- cuarentena únicamente con propietario, motivo y fecha de eliminación;
- medir el comportamiento inestable y solucionar las causas fundamentales.

Los objetos de página o abstracciones similares son útiles cuando expresan acciones estables del usuario. Evite capas que oculten la intención o reproduzcan la implementación de la aplicación.

Relacionado: [[ci-cd-quality-gates]], [[../30-advanced/testability-architecture]].
