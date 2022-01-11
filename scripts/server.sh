#!/bin/bash

docker run --rm -ti \
    -v ${PWD}:/usr/src/app \
    -p "4567:4567" \
    react-lineto-yarn \
    run demo
