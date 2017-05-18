FROM node:5

WORKDIR /opt/site

COPY package.json /opt/site/
RUN npm install
RUN npm install -g gulp
COPY _config.yml /opt/site/

COPY gulpfile.js /opt/site/
COPY themes /opt/site/themes
COPY source /opt/site/source

WORKDIR themes/main

RUN gulp build

WORKDIR /opt/site

CMD npm start
