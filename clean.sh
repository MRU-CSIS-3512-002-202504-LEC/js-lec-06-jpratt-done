#!/bin/sh

rm -rf ./logs/apache2/*.log
touch ./logs/apache2/.gitkeep

rm -rf ./logs/xdebug/*.log
touch ./logs/xdebug/.gitkeep

docker compose stop
docker compose rm -f
docker system prune -a --volumes -f