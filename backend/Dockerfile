# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
# WORKDIR /app

# Copy package.json and package-lock.json to the working directory
# COPY package*.json ./i
COPY . .

# Install app dependencies
RUN npm install

# Bundle app source

# Expose the port on which your app will run
# Define environment variables

# Wait for the MongoDB to be ready before starting the application
CMD ["npm", "start"]