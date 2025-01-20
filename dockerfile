# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración y dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Compila la aplicación Angular
RUN npm run build --prod

# Usa una imagen ligera de servidor web
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
