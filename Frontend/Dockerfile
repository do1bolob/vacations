# Linux Apline OS - specific version + Node.js - specific version:
FROM node:18-alpine3.17

# Create folder inside the image: 
WORKDIR /app

# Copy package.json and package-lock.json from host machine into target image:
COPY package*.json /app

# Install dependencies: 
RUN npm i

# Copy all files from host machine (.) into target image (/app):
COPY . /app

# Which command to execute when container starts:
ENTRYPOINT npm start
