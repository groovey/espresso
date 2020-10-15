# docker build --tag custom:php_7.2-fpm ./
FROM node:12.18.13
LABEL maintainer="Harold Kim Cantil <pokoot@gmail>"

# Set working directory
WORKDIR /var/www

  

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
