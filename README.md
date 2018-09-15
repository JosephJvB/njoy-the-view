# Enjoy the View: A JvB/JBA collaboration

## Getting started:

- clone this repo and enter the directory: `git clone https://github.com/JosephJvB/njoy-the-view.git && cd njoy-the-view`

- install dependencies: `npm i`

- this project expects a PSQL database called vue_dev: `psql postgres` + `create database vue_dev;`

- database expects a user `postgres` with password `postgres` with read/write privileges.

- run database migrations: `npm run migrate:up`

- run acceptance tests: `npm test`

- start the server/bundle the client code:  `npm start`

- open browser @ `localhost:8080`

### Resources used:
- Vid-api-endpoint: https://jbanew.staging.joybusinessacademy.com/api/v2/assignment/videos
- Vue guide: https://vuejs.org/v2/guide
- Vue router: https://router.vuejs.org/guide/
- Vue carousel: https://github.com/SSENSE/vue-carousel
- Vue video-player: https://github.com/surmon-china/vue-video-player
- Vue resize: https://github.com/Akryum/vue-resize