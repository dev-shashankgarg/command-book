## How to build docker images

#### examples

1. To create and buid Redis Server Image
```
mkdir redis-image
cd redis-image
```

create **Dockerfile** in **redis-image** directory and copy the follwing content
```
FROM alpine
RUN apk add --update redis
CMD ["redis-server"]
```

run docker build
```
docker build .
```