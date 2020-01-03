ARG NODEJSVERSION=0
FROM node:${NODEJSVERSION}-alpine

# TODO cd to /app

RUN npm install
RUN npm install -g @angular/cli
RUN ng serve