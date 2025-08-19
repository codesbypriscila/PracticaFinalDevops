# Etapa de runtime minimal
FROM node:20-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias primero (mejor caché)
COPY package*.json ./

# Instalar sólo dependencias de producción
RUN npm ci --omit=dev

# Copiar el resto del código
COPY src ./src

# Variables y puertos
ENV PORT=3000
EXPOSE 3000

# Comando de arranque
CMD ["npm", "start"]
