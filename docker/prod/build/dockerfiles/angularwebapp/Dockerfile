ARG NODEJSVERSION=0
ARG ENTRYPOINTMOUNT=0
FROM node:${NODEJSVERSION}-alpine

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
ENTRYPOINT /usr/local/bin/entrypoint.sh

# Should speed up npm install https://github.com/npm/npm/issues/8836
RUN npm config set registry https://registry.npmjs.org/

# Needed for npm install
RUN apk add --no-cache git
# Just install the latest cli for global. Since global version should be able to be higher than or equal to the local version
RUN npm install -g @angular/cli
RUN mkdir -p /app/compiled