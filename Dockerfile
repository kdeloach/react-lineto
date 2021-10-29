FROM node:lts-buster-slim

// Fixes [webpack-cli] Error: error:0308010C:digital envelope routines::unsupported
// Ref: https://github.com/webpack/webpack/issues/14532
ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /usr/src
