# Etapa base
FROM node:20-alpine AS base
WORKDIR /usr/src/app

# Dependencias (dev + prod)
FROM base AS deps
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Build (usa Nest CLI desde devDependencies)
FROM deps AS build
COPY . .
RUN npm run build

# Imagen de producción
FROM node:20-alpine AS prod
WORKDIR /usr/src/app
ENV NODE_ENV=production
ENV PORT=8080
# Copiamos node_modules (ya resueltos) y el build
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY package*.json ./
EXPOSE 8080
CMD ["node", "dist/main.js"]