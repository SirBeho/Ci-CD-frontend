# Etapa de construcción
# Utiliza una imagen de Node.js para construir la aplicación React
FROM node:14-alpine AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de la aplicación
COPY package.json package-lock.json ./
COPY . .

# Instala las dependencias y construye la aplicación
RUN npm install --production
RUN npm run build

# Etapa final
# Utiliza una imagen de NGINX para servir la aplicación compilada
FROM nginx:alpine

# Copia los archivos compilados desde la etapa de construcción
COPY --from=build /app/build /usr/share/nginx/html

# Configura NGINX
# Elimina el archivo de configuración predeterminado de NGINX
RUN rm /etc/nginx/conf.d/default.conf

# Copia tu propio archivo de configuración de NGINX
# Si es necesario, puedes proporcionar tu propio archivo de configuración personalizado
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80 para que sea accesible desde el exterior
EXPOSE 80

# Comando para iniciar NGINX en primer plano
CMD ["nginx", "-g", "daemon off;"]
