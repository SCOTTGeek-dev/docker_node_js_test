FROM node:19-alpine

COPY package.json /app/
COPY package-lock.json /app/
COPY node_modules /app/

WORKDIR  /app

RUN npm install 

CMD [ "node","app.js" ]