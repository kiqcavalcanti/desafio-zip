#!/bin/sh

cd .docker

docker-compose down
docker-compose build
docker-compose run yarn
docker-compose up db app -d
docker-compose run yarn seed

#if [ ! -f ".env" ]
#  then
#    cp .env.example .env
#fi
