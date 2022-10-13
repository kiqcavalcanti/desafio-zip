#!/bin/sh

cd .docker/v1

docker-compose down
docker-compose build
docker-compose run yarn
docker-compose up -d db app
docker-compose run yarn seed

#if [ ! -f ".env" ]
#  then
#    cp .env.example .env
#fi
