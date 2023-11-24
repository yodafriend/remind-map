FROM node:alpine as builder
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx 
EXPOSE 3000
COPY ./default.conf /etc/nginx/conf.d/default.conf 
COPY --from=builder usr/src/app/build  /usr/share/nginx/html 