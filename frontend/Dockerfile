# Use a Node.js Alpine LTS base image
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json .
RUN npm install 

# Copy the rest of the application code
COPY . .

RUN npm run build 

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
