FROM giuliana/node:4.4.4
COPY package.json package.json
RUN npm install
COPY _config.yml.example _config.yml
CMD npm start
