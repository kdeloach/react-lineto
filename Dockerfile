FROM node:lts-buster-slim

WORKDIR /usr/src

COPY package.json yarn.lock ./
RUN yarn install

ENV PATH="${PATH}:/usr/src/node_modules/.bin"

WORKDIR /usr/src/app

ENTRYPOINT ["yarn"]
