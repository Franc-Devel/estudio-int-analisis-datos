/**
 * BASE DE DATOS DE ESTUDIO - INTRODUCCIÓN AL ANÁLISIS DE DATOS
 * =========================================================================
 * Dossier de Cátedra 2026 — UTN FRT
 * Fuente: docs/Unidad_1_2_y_Caso_AgroTek_Introduccion_Analisis_Datos.md
 * Total de preguntas: 56
 */

const ANALYSIS_DATA = {
  "materia": "Introducción al Análisis de Datos",
  "temas": [
    "Modelo DIKW y Fundamentos del Análisis de Datos",
    "Clasificación y Tipos de Datos (Variables y Fuentes)",
    "Los 5 Tipos de Análisis, Roles y Herramientas",
    "Caso Práctico AgroTek y Formulación de Preguntas",
    "Dataset, Formatos y Ciclo de Vida del Dato",
    "Calidad de Datos: Las 5 Dimensiones y Outliers vs Errores",
    "Proceso ETL, Inspección Inicial y Asistencia con IA",
    "Caso Club Deportivo Cerro Alto y Trabajo Práctico N.º 1"
  ],
  "resumenes": [
    [
      "Modelo DIKW y Fundamentos del Análisis de Datos",
      "Tener muchos registros acumulados no aporta valor por sí solo si no se transforman en decisiones útiles.",
      "El modelo DIKW describe la pirámide: Dato (crudo/sin contexto) → Información (contexto y significado) → Conocimiento (patrones e interpretación) → Decisión / Sabiduría (acción aplicada).",
      "Ejemplo del sensor: 28 (dato) → 28 °C a las 14:00 hs en cámara (información) → la temperatura sube por sobrecarga térmica (conocimiento) → ajustar refrigeración y horarios de motores (decisión)."
    ],
    [
      "Clasificación y Tipos de Datos (Variables y Fuentes)",
      "Cuantitativos continuos: admiten infinitos valores fraccionarios en un intervalo (ej. tiempo, peso, temperatura).",
      "Cuantitativos discretos: surgen de conteos y sólo toman enteros (ej. unidades vendidas, cantidad de hijos, reclamos).",
      "Cualitativos nominales (etiquetas sin orden: género, código postal, DNI) vs Ordinales (categorías con jerarquía: nivel de satisfacción, rango).",
      "Fuentes primarias (recolectadas de primera mano para el objetivo) vs secundarias (recolectadas previamente por terceros o con otro fin, ej. INDEC)."
    ],
    [
      "Los 5 Tipos de Análisis, Roles y Herramientas",
      "Descriptivo (¿Qué pasó?) y Diagnóstico (¿Por qué pasó?) analizan el pasado.",
      "Predictivo (¿Qué podría pasar?) y Prescriptivo (¿Qué deberíamos hacer?) orientan el futuro.",
      "Cognitivo: sistemas de IA que procesan lenguaje natural, aprenden y simulan razonamiento.",
      "Roles: Analista de datos (insights y negocio), Científico de datos (modelos estadísticos complejos), Ingeniero de datos (pipelines e infraestructura) y Analista de negocio (puente con la estrategia).",
      "Herramientas: Excel (análisis rápido y tablas), SQL (consultas a bases relacionales), Python/Pandas (procesamiento avanzado y automatización) y Power BI (dashboards ejecutivos)."
    ],
    [
      "Caso Práctico AgroTek y Formulación de Preguntas",
      "AgroTek enfrenta problemas de merma de productos de temporada, logística de entregas y oportunidad de venta cruzada.",
      "Pregunta descriptiva: ¿Cuál fue el porcentaje de merma por producto el año pasado?",
      "Pregunta diagnóstica: ¿Por qué se venció el stock: por demoras de logística o sobreestimación de compras?",
      "No se debe predecir ni modelar sin antes comprender la historia y verificar la calidad de los datos existentes."
    ],
    [
      "Dataset, Formatos y Ciclo de Vida del Dato",
      "Dataset: colección estructurada; fila = registro u observación; columna = variable o atributo.",
      "Formatos: estructurados (tablas con esquema rígido), semiestructurados (JSON, XML con etiquetas) y no estructurados (audio, video, texto libre).",
      "Ciclo de vida: Generación → Recolección → Procesamiento → Almacenamiento → Análisis → Uso → Archivo o Destrucción."
    ],
    [
      "Calidad de Datos: Las 5 Dimensiones y Outliers vs Errores",
      "Principio GIGO (Garbage In, Garbage Out): datos defectuosos invalidan cualquier conclusión técnica.",
      "5 dimensiones: Completitud (sin nulos críticos), Consistencia (coherencia entre campos/sistemas), Validez (cumple formato/rango), Unicidad (sin duplicados) y Actualidad (vigencia temporal).",
      "Outlier real vs dato erróneo: un valor atípico real es legítimo y no se borra a ciegas; un dato erróneo es una falla de carga o captura y debe tratarse."
    ],
    [
      "Proceso ETL, Inspección Inicial y Asistencia con IA",
      "ETL: Extraer (fuentes diversas), Transformar (limpieza, tipos, normalización) y Cargar (al data warehouse o tabla analítica).",
      "Inspección inicial: conteo de filas, columnas, tipos de datos, nulos y valores extremos antes de tocar el dataset.",
      "Uso crítico de IA: útil como asistente para explorar o generar código, pero nunca como verdad incuestionable sin contrastar contra los datos reales."
    ],
    [
      "Caso Club Deportivo Cerro Alto y Trabajo Práctico N.º 1",
      "Caso de socios y cuotas migrando de registros manuales a digitales.",
      "TP1 acumulativo: inspección inicial, tabla de problemas clasificados por dimensión de calidad, criterio error vs outlier y propuesta de tratamiento previo al análisis.",
      "Adopta el enfoque analítico del dato y no de programación o desarrollo del sistema."
    ]
  ],
  "preguntas": []
};
