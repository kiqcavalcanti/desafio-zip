FROM node:alpine

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli

WORKDIR /app

ENTRYPOINT ["yarn", "start:dev"]