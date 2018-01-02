FROM node:9

RUN mkdir /src

WORKDIR /src

COPY ./package.json /src/package.json
COPY ./nodemon.json /src/nodemon.json
RUN npm install --silent

COPY ./app /src/app
COPY ./bin /src/bin
COPY ./public /src/public

ENV NODE_ENV development

EXPOSE 3000

RUN ls -al

CMD ["node", "bin/www"]
