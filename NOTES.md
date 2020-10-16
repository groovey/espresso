## Espresso run

    $ docker-compose up

## Mysql Phpmyadmin

    url: http://192.168.99.101:8080 
    server: mysql
    username: root
    password: webdevel
    database: espresso

## Redis

    $ docker-compose exec redis redis-cli
    $ 127.0.0.1:7379> keys *

## Mongo CLient (Mongoku)

    url: http://192.168.99.101:3100
    add server: mongo

## Nodejs

    To add a package:
    $ docker-compose exec espresso npm install ip

    To trace the logs for espresso.js
    $ docker logs espresso --follow

