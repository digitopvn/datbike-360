FROM nginx

COPY build /usr/share/nginx/html/
COPY deployment/nginx.conf /etc/nginx/nginx.conf

RUN chmod -R 755 /usr/share/nginx/html/static