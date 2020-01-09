#!/bin/bash

# Variables
PROJECTNAME=hotel-build
NODEJSVERSION=13

rm -rf ./compiled
mkdir ./compiled/angularwebapp -p

cd build/dockerfiles/angularwebapp
docker build --build-arg NODEJSVERSION=${NODEJSVERSION} --tag "${PROJECTNAME}-angularwebapp" .
cd ../../..

docker run -v /C:/Projects/Hotel/hotel.webapp:/app "${PROJECTNAME}-angularwebapp"
#-v '/app/node_modules'
docker cp "${PROJECTNAME}-angularwebapp:/app/dist/hotel" './compiled/angularwebapp'

mkdir ./compiled/springapi -p
