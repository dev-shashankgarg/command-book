# DOCKER

### Basic Commands
Command | Usage
-------- | -------
docker run \<image-name\> | To download and run docker image
docker run -p \<outside-port\> :\<container-port\>   \<image-name\> | To allow port forwarding while running container
docker create \<image-name\>  | To create a container
docker start \<container-id\>  | To start a container
docker start -a \<container-id\>  | To start a container with output logs on terminal
docker logs \<container-id\>  | To view output logs on terminal (alternative to -a flag in start command)
docker ps  | To check running containers
docker ps  -all  | To check history of running and stopped containers
docker system prune  | To clean up stopped containers and build cache
docker stop \<container-id\>  | To stop a container allows graceful shutdown before killing the process
docker kill \<container-id\>  | To kill a container immidiately
docker exec -it \<container-id\> \<command\>  | To start a iterative terminal with formatted input into a container
docker run -it \<image-name\> \<command\>  | Alternative to above command

<br/>

#### Examples
```
docker run hello-world
```

```
docker run busybox
```

To override start command for container 
```
docker run busybox echo hi there
```

To work with a redis container
```
docker run redis
docker ps  (To get container id associated with redis) (94a9b8b6d538)

docker exec -it 94a9b8b6d538 redis-cli (To start redis-cli in the container)
or
docker exec -it 94a9b8b6d538 sh (To start a shell inside container)
> redis-cli
```




