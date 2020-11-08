## How to build docker images

#### examples

1. To create and buid Redis Server Image
```sh
mkdir redis-image
cd redis-image
```

create **Dockerfile** in **redis-image** directory and copy the follwing content
```sh
FROM alpine
RUN apk add --update redis
CMD ["redis-server"]
```

run docker build
```sh
docker build .
```

1. Tagging a build
```sh
docker build -t wormx/simpleweb .
```