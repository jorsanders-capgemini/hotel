ARG NODEJSVERSION=0
FROM node:${NODEJSVERSION}-alpine

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN ls usr/local/bin/
ENTRYPOINT /usr/local/bin/entrypoint.sh

# Needed for npm install
RUN apk add --no-cache git
# Just install the latest cli for global. Since global version should be able to be higher than or equal to the local version
RUN npm install -g @angular/cli