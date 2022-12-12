FROM node:16.16.0-alpine as build

WORKDIR /app

COPY . .

CMD node node-test.js