#!/bin/bash

docker run --rm \
    -v ${PWD}:/usr/src/app \
    react-lineto-yarn \
    test
