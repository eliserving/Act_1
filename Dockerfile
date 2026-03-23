FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar dependencias primero (mejor cache)
COPY package*.json ./

# Instalar dependencias de producción
RUN npm ci --only=production

# Copiar el resto del código
COPY . .

# Exponer el puerto de la 
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
