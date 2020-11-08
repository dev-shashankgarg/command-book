## How to build app

```sh
cd <PATH-TO-PROJECT>/docker/simpleweb
docker build -t wormx/simplewebapp .
```

## How to run the container with port mapping
```sh
docker run -p 8080:8080 wormx/simplewebapp
```