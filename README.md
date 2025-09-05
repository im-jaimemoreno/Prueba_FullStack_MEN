# Prueba “Time in Words” — Ejecución Local

Este repositorio contiene dos proyectos independientes:

- Backend: `backend-app` (Spring Boot, Java 17)
- Frontend: `frontend-app` (Angular 19, standalone components)

## Requisitos
- Java 17+ y Maven 3.9+ (`java -version`, `mvn -v`)
- Node.js 18+ y npm 9+ (`node -v`, `npm -v`)
- (Opcional) Angular CLI 19 (`npm i -g @angular/cli`)

## Backend (`backend-app`)
- Puerto por defecto: `http://localhost:8080`
- Swagger UI: `http://localhost:8080/swagger-ui/index.html`

Pasos para ejecutar:
```bash
cd backend-app
mvn spring-boot:run
```

Probar con cURL (en otra terminal):
```bash
curl -F "file=@../sample-data/test.txt" http://localhost:8080/api/time/upload
```

La API responde un arreglo JSON con objetos `{ hora, minutos, resultado }`.

## Frontend (`frontend-app`)
- Dev server: `http://localhost:4200`
- El proxy de desarrollo apunta por defecto a `http://localhost:8081` (archivo `proxy.conf.json`).

Debes alinear el puerto del backend con el proxy del frontend:

- Opción A — Cambiar el proxy del frontend a 8080 (recomendado si mantienes el backend con su puerto default):
  - Edita `frontend-app/proxy.conf.json` y reemplaza `"target": "http://localhost:8081"` por `"http://localhost:8080"`.

- Opción B — Cambiar el puerto del backend a 8081:
  - Edita `backend-app/src/main/resources/application.properties` y establece `server.port=8081`.

Pasos para ejecutar el frontend:
```bash
cd frontend-app
npm install
npm start
# Abre http://localhost:4200
```

Uso de la UI:
- Arrastra y suelta un archivo `.txt` con pares de líneas: una línea con la hora (1..12) y la siguiente con los minutos (0..59).
- También puedes hacer clic en la zona para seleccionar el archivo.
- La tabla mostrará `{ hora, minutos, resultado }` y podrás descargar el JSON de resultados.

Archivo de ejemplo (`sample-data/test.txt`):
```
5
47
3
00
7
15
```

## Estructura del repositorio
```
prueba-minambiente-jaime-moreno/
├─ backend-app/        # Spring Boot (Java 17)
├─ frontend-app/       # Angular 19 (standalone components)
└─ sample-data/        # Archivos de prueba .txt
```

## Solución de problemas
- Conexión fallida desde la UI
  - Asegúrate de que el backend esté corriendo y que el proxy del frontend apunte al puerto correcto.
- El navegador intenta abrir el archivo al soltarlo
  - Se gestionó el `drag & drop` globalmente; recarga la página si persiste.
- CORS
  - Usa el dev server con proxy (`npm start`) o ubica el frontend detrás del mismo dominio que el backend.

## Scripts útiles
- Backend:
  - `mvn -q -DskipTests package` (compila sin tests)
  - `mvn spring-boot:run` (ejecución)
- Frontend:
  - `npm run build` (build de producción)
  - `npm start` (dev server con proxy)

