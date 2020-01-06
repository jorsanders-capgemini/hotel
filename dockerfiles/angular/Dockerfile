ARG NODEJSVERSION=0
FROM node:${NODEJSVERSION}-alpine

WORKDIR /app
RUN npm install
RUN npm install -g @angular/cli

# Needed for npm install
RUN apk add --no-cache git