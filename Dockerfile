<<<<<<< HEAD
FROM node:19-alpine
=======
FROM node:alpine
>>>>>>> 2fa133bc9902c4dbea96081030cddeca0a12c7c9

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .
<<<<<<< HEAD
ENTRYPOINT [ "npm", "run", "dev" ]
=======
RUN chmod +x docker-entrypoint.sh

EXPOSE 3005
ENTRYPOINT [ "npm", "run", "start" ]
>>>>>>> 2fa133bc9902c4dbea96081030cddeca0a12c7c9
