# 📊 Modo Parcial — Introducción al Análisis de Datos

> Plataforma interactiva de estudio activo y simulador de parciales para la cátedra de **Introducción al Análisis de Datos** (UTN FRT - Cátedra 2026).

---

## 🚀 Descripción del Proyecto

**Modo Parcial** es una aplicación web interactiva diseñada para la preparación de exámenes y evaluación continua mediante técnicas de **memoria activa (active recall)** y **repetición espaciada**. Permite evaluar conocimientos teóricos y prácticos sobre el ciclo de vida del dato, calidad de datos, el modelo DIKW y casos de negocio reales.

---

## 📁 Estructura del Proyecto

El repositorio está organizado siguiendo estándares profesionales para aplicaciones web estáticas y documentación académica:

```text
estudio-int-analisis-datos/
├── index.html                   # Interfaz de usuario principal y dashboard
├── assets/
│   ├── css/
│   │   └── styles.css          # Sistema de diseño, tokens oscuros y animaciones
│   └── js/
│       ├── analysis-data.js    # Banco de datos: 56 preguntas, resúmenes y taxonomía
│       └── app.js              # Motor de simulación, temporizador y lógica de vidas
├── docs/
│   ├── README.md               # Guía de contribución y formato de preguntas
│   └── Unidad_1_2_y_Caso_AgroTek_Introduccion_Analisis_Datos.md # Dossier teórico completo
└── README.md                    # Documentación general del repositorio
```

---

## 📚 Contenidos y Unidades Académicas

La plataforma abarca la totalidad del programa de las Unidades 1 y 2:

1. **Modelo DIKW y Fundamentos del Análisis de Datos** (7 preguntas): Del dato crudo a la sabiduría y toma de decisiones.
2. **Clasificación y Tipos de Datos (Variables y Fuentes)** (7 preguntas): Continuos, discretos, nominales, ordinales; fuentes primarias vs secundarias.
3. **Los 5 Tipos de Análisis, Roles y Herramientas** (9 preguntas): Descriptivo, diagnóstico, predictivo, prescriptivo y cognitivo; perfiles profesionales y herramientas (SQL, Python, Power BI, Excel).
4. **Caso Práctico AgroTek y Formulación de Preguntas** (6 preguntas): Formulación de hipótesis, diagnóstico de mermas y venta cruzada.
5. **Dataset, Formatos y Ciclo de Vida del Dato** (6 preguntas): Registros, atributos, esquemas estructurados vs no estructurados y etapas del ciclo.
6. **Calidad de Datos: Las 5 Dimensiones y Outliers vs Errores** (8 preguntas): Principio GIGO, completitud, consistencia, validez, unicidad, actualidad; tratamiento riguroso de anomalías.
7. **Proceso ETL, Inspección Inicial y Asistencia con IA** (6 preguntas): Fases de extracción, transformación y carga, auditoría de nulos y uso crítico de IA.
8. **Caso Club Deportivo Cerro Alto y Trabajo Práctico N.º 1** (7 preguntas): Migración de sistemas legacy, auditoría de calidad y propuestas de tratamiento.

---

## 🎮 Modos de Estudio Disponibles

- **⚡ Express (10 preguntas):** Sesión ultrarrápida para repasos de 5 minutos.
- **🎯 Normal (20 preguntas):** Muestreo equilibrado de todas las unidades temáticas.
- **⏱️ Simulacro de Parcial (30 preguntas / 60 min):** Experiencia fiel al examen formal con temporizador y alta exigencia.
- **📖 Modo Completo (56 preguntas):** El banco total de preguntas para una revisión exhaustiva.
- **🏆 Aventura por Niveles:** 4 niveles de dificultad secuencial (*Fundamentos*, *Construcción*, *Aplicación*, *Desafío final*). Requiere aprobar con nota 6 (60%) para desbloquear el nivel siguiente.
- **📌 Práctica por Unidad:** Entrenamiento focalizado en un tema específico desde el dashboard de inicio.
- **🔄 Repaso de Errores:** Memoria persistente en `localStorage` que prioriza automáticamente las preguntas falladas en intentos anteriores.

---

## ⚖️ Sistema de Vidas y Criterio de Aprobación

El simulador implementa el criterio académico oficial de aprobación con **nota mínima 6 (60% de aciertos)**:

$$\text{aciertos requeridos} = \lceil \text{preguntas} \times 0.6 \rceil$$
$$\text{errores permitidos (vidas)} = \text{preguntas} - \text{aciertos requeridos}$$

- **Vidas disponibles:** Cada error reduce una vida. Si se agotan los errores permitidos, la ronda finaliza con posibilidad de reintentar.
- **Feedback instantáneo:** Cada respuesta incluye la justificación académica oficial basada en los apuntes de la cátedra.
- **Puntuación y estadísticas:** Cálculo dinámico de nota sobre 10, precisión porcentual, racha máxima y resumen de fallos.

---

## 💻 Instrucciones de Ejecución

Al ser una aplicación web nativa (Vanilla HTML5, CSS3 y JavaScript ES6+), no requiere dependencias externas ni compilación:

### Opción 1: Apertura directa
Abrí directamente el archivo `index.html` con cualquier navegador web moderno (Chrome, Firefox, Safari, Edge).

### Opción 2: Servidor local HTTP
```bash
# Con Python 3
python3 -m http.server 8080

# Con Node.js (npx)
npx serve .
```

Accedé a `http://localhost:8080/` en tu navegador.
