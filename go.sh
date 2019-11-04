#!/bin/bash

echo "Starting up the products and the reviews services with docker..."

echo "exec : docker-compose up -d"
docker-compose up -d

echo "Here's the ENV properties"
echo "-------------------------"
cat ./graphql-api/.env
echo 
echo "-------------------------"

read -n 1 -s -r -p "Running...Press any key to stop"

echo "exec: docker-compose down"
docker-compose down