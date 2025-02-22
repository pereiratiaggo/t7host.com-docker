FROM nginx:alpine
#FROM ubuntu/apache2

COPY ./src /usr/share/nginx/html
#COPY ./src /var/www/html