# Use an official Node.js runtime as the base image
FROM node:21-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port your application will listen on
EXPOSE 8080

# Define the command to start your Node.js application
CMD ["node", "src/server.js"]
