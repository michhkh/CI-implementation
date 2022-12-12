FROM node:16.16.0-alpine as build

COPY . .

CMD node node-test.js