export const TEXTS = {
  header: {
    title: 'Prueba Técnica: \"The Time in Words\"',  
    subtitle:
      'Carga un archivo .txt para convertir múltiples registros de hora a su representación en palabras.'
  },
  fileDescription: {
    title: 'Formato del archivo',
    intro:
      'El archivo debe ser .txt y contener pares de líneas: en una línea la hora (1..12) y en la siguiente los minutos (0..59).',
    exampleTitle: 'Ejemplo de contenido',
    exampleContent: '5\n47\n3\n00\n7\n15',
    notesTitle: 'Notas',
    notes: [
      'Se ignoran líneas vacías.',
      'Solo números enteros; sin separadores ni símbolos.',
      'Rangos esperados: horas 1..12; minutos 0..59.'
    ]
  },
  uploadZone: {
    headlinePrefix: 'Arrastra y suelta',
    headlineSuffix: 'o haz clic para cargar un archivo',
    hint: 'Solo archivos .txt',
    selectedPrefix: 'Archivo seleccionado:'
  },
  actions: {
    process: 'Procesar Archivo',
    processing: 'Procesando...'
  },
  results: {
    title: 'Resultados',
    download: 'Descargar JSON',
    columns: {
      hora: 'Hora',
      minutos: 'Minutos',
      resultado: 'Resultado en Palabras'
    }
  },
  errors: {
    invalidTxt: 'Por favor, selecciona un archivo de texto plano (.txt).',
    noFile: 'No hay ningún archivo seleccionado.',
    http0: 'No se pudo conectar con el servidor.',
    http400: 'Solicitud inválida. Verifica el archivo.',
    http404: 'Recurso no encontrado.',
    http415: 'Formato de archivo no soportado.',
    http500: 'Error interno del servidor.',
    unknown: 'Ocurrió un error desconocido.'
  },
  footer: {
    name: 'JAIME MORENO',
    city: 'BOGOTÁ - COLOMBIA',
    phone: '(+57) 304 440 6307',
    email: 'im.jaimemoreno@gmail.com'
  }
} as const;

export type Texts = typeof TEXTS;
