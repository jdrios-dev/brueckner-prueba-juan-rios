# node base image
FROM node:12.2.0-alpine as build

# working directory
WORKDIR /app

# copy everything to current working directory
COPY . ./

# run npm install

RUN npm install -g @angular/cli
RUN npm install --unsafe-perm
RUN npm run build

# nginx base image
FROM nginx:1.16.0-alpine

# copy static contents of project to nginx html
COPY --from=build /app/dist/brueckner /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
