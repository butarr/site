FROM node:5

WORKDIR /opt/site

COPY package.json /opt/site/
RUN npm install
RUN npm install -g gulp
COPY _config.yml /opt/site/

COPY gulpfile.js /opt/site/
COPY themes /opt/site/themes
COPY valimate.json /opt/site/valimate.json
COPY valimate-config.js /opt/site/valimate-config.js
COPY valimate-config-local.js /opt/site/valimate-config-local.js
COPY valimate-test.json /opt/site/valimate-test.json

WORKDIR themes/main

RUN gulp build

WORKDIR /opt/site

CMD npm start
