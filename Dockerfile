FROM node:12.13.0

WORKDIR /app

COPY . .

CMD [ "yarn", "dev" ]
