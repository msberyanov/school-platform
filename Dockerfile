# сборка react-приложения
FROM node:13.12.0-alpine as build

WORKDIR /app

COPY public ./public
COPY src ./src
COPY package.json ./
COPY package-lock.json ./
COPY tailwind.config.js ./
COPY tsconfig.json ./

RUN npm ci
RUN npm run build

# настройка nginx-сервера
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



