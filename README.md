# Modelo de Negocio de Camisetas

Este proyecto es una aplicación web interactiva que simula un modelo de negocio para la venta de camisetas NCAA. Permite a los usuarios calcular los beneficios basados en varios parámetros como la demanda estimada, cantidad de pedido, costos y precios.

## Características

- Interfaz de usuario intuitiva con controles para ajustar los parámetros del modelo.
- Cálculo en tiempo real de ingresos, costos y beneficios.
- Opción para aplicar descuentos al precio de venta.
- Generación de valores aleatorios para pruebas rápidas.
- Funcionalidad para limpiar todos los campos.

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

## Cómo Usar

1. Abre el archivo `index.html` en un navegador web moderno.
2. Ajusta los valores de entrada utilizando los campos de texto o los botones de incremento/decremento.
3. Haz clic en "Calcular" para ver los resultados.
4. Usa "Generar valores aleatorios" para llenar rápidamente los campos con datos de prueba.
5. Utiliza "Limpiar" para resetear todos los campos.

## Estructura del Proyecto

- `index.html`: Estructura HTML de la aplicación.
- `styles.css`: Estilos CSS para la interfaz de usuario.
- `script.js`: Lógica de JavaScript para la funcionalidad interactiva.

## Funciones Principales

- `calculateProfit()`: Calcula los ingresos, costos y beneficios basados en los inputs del usuario.
- `applyDiscount()`: Aplica un descuento al precio de venta completo.
- `generateRandomValues()`: Genera valores aleatorios para todos los campos de entrada.
- `clearValues()`: Resetea todos los campos de entrada y borra los resultados.

## Personalización

Puedes ajustar los incrementos de los botones +/- modificando el objeto `incrementValues` en `script.js`.

## Posibles Mejoras

1. Gráficos y visualizaciones:
   - Implementar gráficos interactivos para visualizar relaciones entre variables.
   - Añadir un gráfico de punto de equilibrio.

2. Análisis de sensibilidad:
   - Mostrar cómo los cambios en diferentes variables afectan el beneficio final.
   - Implementar análisis de escenarios (mejor caso, peor caso, caso más probable).

3. Persistencia de datos:
   - Utilizar localStorage para guardar los últimos valores ingresados.
   - Permitir guardar y cargar diferentes configuraciones o escenarios.

4. Mejoras en la interfaz de usuario:
   - Implementar un diseño responsive para dispositivos móviles.
   - Añadir un modo oscuro.
   - Implementar tooltips explicativos para cada campo.

5. Funcionalidades adicionales:
   - Calcular el precio óptimo basado en la elasticidad de la demanda.
   - Implementar un sistema de pronóstico de demanda.
   - Incluir cálculo de ROI (Retorno de Inversión).

6. Exportación de datos:
   - Añadir opción de exportar resultados en CSV o PDF.
   - Implementar compartir resultados por email o redes sociales.

7. Internacionalización:
   - Añadir soporte para múltiples idiomas.
   - Implementar cambio entre diferentes monedas.

8. Validación y manejo de errores:
   - Mejorar la validación de entradas.
   - Implementar un sistema de notificaciones más robusto.

9. Integración con APIs:
   - Conectar con APIs de proveedores para costos actualizados.
   - Integrar con APIs de e-commerce para datos de precios de competidores.

10. Optimización de rendimiento:
    - Implementar memoización para cálculos repetitivos.
    - Utilizar Web Workers para cálculos intensivos.

11. Tests y documentación:
    - Agregar pruebas unitarias y de integración.
    - Mejorar la documentación del código.

