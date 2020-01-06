ARG NODEJSVERSION=0
FROM node:${NODEJSVERSION}-alpine

WORKDIR /app
RUN npm install
# Just install the latest cli for global. Since global version should be able to be higher than or equal to the local version
RUN npm install -g @angular/cli

# Needed for npm install
RUN apk add --no-cache git