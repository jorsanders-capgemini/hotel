ARG APACHEVERSION=0
FROM httpd:${APACHEVERSION}-alpine

COPY ./config/angularwebapp/apache/conf /usr/local/apache2/conf
COPY ./compiled/angularwebapp /usr/local/apache2/htdocs