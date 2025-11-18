# Proyecto Matrícula (NestJS + PostgreSQL)

## Requisitos
- Docker Desktop (y docker-compose)
- Node.js 18+ y npm
- Git Bash/PowerShell/Terminal de VS Code

---

## 1) Levantar contenedor
Desde la raíz del proyecto (donde está docker-compose.yml):

```bash
docker compose up -d --build
docker ps
```

Detener/limpiar:
```bash
docker compose down          # detiene
docker compose down -v       # detiene y borra volumenes
```

---

## 2) Configurar variables de entorno
Crear un archivo `.env` en la raíz del proyecto:

```bash
# API
PORT=8080

# Base de datos
HOST=postgres
DATABASE_PORT=5432
DATABASE_USERNAME=user
DATABASE_PASSWORD=password
DATABASE_NAME=nestjs_db
```