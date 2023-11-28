FROM node:18-alpine

WORKDIR /app/src

COPY ./Middleware/package.json ./

RUN npm install

COPY ./Middleware/ .

EXPOSE 8080

CMD ["npm", "start"]
