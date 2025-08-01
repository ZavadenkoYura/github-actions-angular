FROM node:23-slim

WORKDIR /usr/src/app

COPY --link package*.json .

RUN npm config set cache /usr/src/app/.npm-cache --global && \
    npm install

COPY --link . .

EXPOSE 4200

ENTRYPOINT ["npm", "start"]