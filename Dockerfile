FROM node:18-alpine3.15 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
#RUN npm install
RUN npm ci --only=production
COPY . .
CMD ["node", "index.js"]