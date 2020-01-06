ARG NODEJSVERSION=0
FROM node:${NODEJSVERSION}-alpine

# Needed for npm install
RUN apk add --no-cache git
# Just install the latest cli for global. Since global version should be able to be higher than or equal to the local version
RUN npm install -g @angular/cli

COPY ./hotel.webapp /app
WORKDIR /app

RUN npm install

# TODO: ng build and copy only the dist files to an apache server

CMD ng serve --prod --host 0.0.0.0