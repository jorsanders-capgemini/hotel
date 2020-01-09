#!/bin/sh

if [ ! -f '.env' ]; then
    echo ".env doesn't exist"
    exit 1
fi

if [ ! -f 'config/springapi/application.properties' ]; then
    echo "config/springapi/application.properties doesn't exist"
    exit 1
fi

rm -rf ./compiled
cd ./hotel-build/
docker-compose up
cd ../
docker-compose up --build --force-recreate -d

echo '========================================================'
echo 'production stack recompiled and running. Run docker-compose up to attach to stdout'
echo 'to restart without compiling sipmly call docker-compose up or docker-compose restart'
echo '========================================================'