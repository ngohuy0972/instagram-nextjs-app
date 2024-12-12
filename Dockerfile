# Use the official Node.js 18 image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set NODE_ENV to production
ENV NODE_ENV=production

# Build the Next.js application
RUN npx next build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npx", "next", "start"]