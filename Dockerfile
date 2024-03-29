FROM node:14.13

WORKDIR /app/espresso

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install -g supervisor
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run" , "serve"]
