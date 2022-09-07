FROM node:16

WORKDIR /usr/app/src

ENV SERVER_PORT=$SERVER_PORT

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
