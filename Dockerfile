FROM node:20.15.1-alpine

RUN mkdir -p app

WORKDIR /app

COPY package*.json /app

RUN npm cache clean --force; npm install --force

COPY . /app

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]