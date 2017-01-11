# Site


## Requirements

- Node.js v0.12.7 or newer
- frida-backend repo
- mongodb running

## Running

- `npm install`
- duplicate the file `_config.yml.example` and rename the copy to `_config.yml`

- `npm start`
The site will be running on http://localhost:4000

## Running with Docker (User docker-compose or Docker for Mac)
### With docker-compose : You need docker and docker-compose installed

- Rename `Dockerfile.docker_compose` to `Dockerfile`

- `docker-compose -f docker-compose-dev.yml -up -d`

The site will be running on http://dockerip:4000

### With Docker for Mac : [https://docs.docker.com/docker-for-mac/]

- Rename `Dockerfile.docker_for_mac` to `Dockerfile`

- `docker build -t brasil-de-fato/site .`

This will build the docker image with minimal install of node

- `docker run -p 4000:4000 --name bdf_site -d -v [PROJECT_DIRECTORY]:/opt/site -t brasil-de-fato/site`

This will start a container with the project directory from your host machine shared with the container

- `npm install`
- `npm start`

The site will be running on localhost:4000

## Running HTML CSS tests
### For the first time

- Run `node lib/cli/frida.js seeds` in folder Frida-backend (Is necessary one post fixed).
- `npm install`

### For all the times
- `npm test`
