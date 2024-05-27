# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the remaining application code to the working directory
COPY . .

# Expose the port on which your React app will run
EXPOSE 3000

# Command to run the React app
CMD ["npm", "start"]