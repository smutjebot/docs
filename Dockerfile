#############
### build ###
#############

# base image
FROM node:21-alpine3.17 as build

# set working directory
WORKDIR /src

# add `/src/node_modules/.bin` to $PATH
ENV PATH /src/node_modules/.bin:$PATH

# install and cache app dependencies
ADD yarn.lock package.json ./
RUN yarn install && yarn cache clean

# add app
COPY . .

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN yarn run build

#############
### Start ###
#############

# base image
FROM node:21-alpine3.17 as server

WORKDIR /app

COPY --from=build /src/.output ./

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# expose port 3000
EXPOSE 3000

# run nuxt
ENTRYPOINT ["node", "server/index.mjs"]
