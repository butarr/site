FROM node:0.12.15-slim

WORKDIR /opt/site

COPY package.json /opt/site/
RUN npm install

COPY gulpfile.js /opt/site/
COPY themes /opt/site
COPY source /opt/site
