# crud-postgres

> A Vue.js project with express

## Requirements
* Node
* NPM or YARN
* Docker
* Docker Compose

# With Docker

## Init Docker

### Create Image crud/vue
```bash
$ docker build -t crud/vue
$ docker tag crud/vue crud/vue
```

### Init project
```bash
$ docker-compose up
```

### External Commands
```bash
# Start Server for production
$ docker-compose run web yarn start

# Static build for production with minification
$ docker-compose run web yarn run build
```

# With Yarn

### Install dependencies
``` bash
$ yarn install
```
### Build Static Setup

``` bash
# build for development
$ yarn run dev

# build for production with minification
$ yarn run build
```

### Build Server Setup
``` bash
# build for development
$ yarn run server:dev

# build for production with minification
$ yarn start
```
