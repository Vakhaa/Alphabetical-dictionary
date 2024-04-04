# Fetching the latest node image on apline linux
FROM node:19-alpine3.15 AS builder

# Declaring env
ENV NODE_ENV production
ENV HOST="0.0.0.0"
ENV REACT_APP_SERVER="http://localhost:5000"

# Setting up the work directory
WORKDIR /app

# Copying all the files in our project
COPY tsconfig.json .
COPY package.json .
COPY package-lock.json .

# Installing dependencies
RUN npm install --production

# Copying all the files in our project
COPY . .

# Building our application
RUN npm run build

# Fetching the latest nginx image
FROM nginx

# Copying built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]