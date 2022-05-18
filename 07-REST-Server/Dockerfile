FROM node:18-alpine3.15

WORKDIR /07-REST-SERVER
COPY . .
RUN yarn install --production

CMD ["node" , "/07-REST-SERVER/app.js"]