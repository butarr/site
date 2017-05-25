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

## Running with Docker
### With docker-compose : You need docker and docker-compose installed

- duplicate the file `_config.yml.example` and rename the copy to `_config.yml`

- `docker-compose up -d --build`

### To check the logs

- `docker-compose logs -f`

### Running test with docker

- `docker-compose run site npm test`

### Running test environment with docker

- `docker-compose run site npm run validation-test`

The site will be running on localhost:4000

### Running local test
- `npm test`

### Running test environment

- `npm run validation-test	`
