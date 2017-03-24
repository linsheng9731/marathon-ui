#!/bin/bash
cd ../
set +e
npm run dist
docker build -t marathon-ui .
version=$(date +%Y-%m-%d-%H)
docker tag marathon-ui registry.growingio.com/marathon-ui:release_$version
docker push registry.growingio.com/marathon-ui:release_$version
set -e 
