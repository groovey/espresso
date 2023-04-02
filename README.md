<p align="center"><a href="#" target="_blank"><img src="https://cdn.shopify.com/s/files/1/0038/8775/9458/files/Logo_PNG_3_410x.png?v=1587634392" width="245"></a></p>
<p align="center">
The opinionated Laravel version of Nodejs.
</p>

### About Espresso.js

Espresso is a node application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Espresso.js takes the pain out of development by easing common tasks used in many web projects, such as:

- Simple and fast routing engine.
- Builds on the latest web technolgy trends. 
- An MVC framework for Nodejs. 
- A minimal and flexible framework.
- Supports restful Api, Graphql, CMS Adminitration, SPA's and so much more.
- Mutiple DB support (Mongo, RDBMS, Redis, etc.)
- Scable and easy to use.
- Build on top of Express.js. 
- Using Javascript Standard Style
- Crafted with Love.

### Start
    
    $ npm run serve

### Setup

To run espresso - you need to setup a mongodb and mysql database. 
You need to setup `.env` environmental variables for espresso.    

    $ npm install --legacy-peer-deps
  
### CLI

    $ node artisan    

### Webpack

    $ npm run build:dev
    $ npm run build:prod

### To seed user collection

    $ node artisan db:seed user

### Docker

If you want to use docker. Run the following commands:

    $ docker-compose up -d
    $ docker-compose down
  
### License

The Espresso.js framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
