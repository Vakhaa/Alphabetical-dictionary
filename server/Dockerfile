# Fetching the minified node image on apline linux
FROM node:slim

# Declaring env
ENV NODE_ENV production

# Setting up the work directory
WORKDIR /usr/src/app

# Copying all the files in our project
COPY . .

COPY tsconfig.json .

COPY . . 

ENV HOST="0.0.0.0"

# Installing dependencies
RUN npm install

RUN npm install typescript

RUN npm run build

# Exposing server port
EXPOSE 5000

CMD ["node","dist/app.js"]