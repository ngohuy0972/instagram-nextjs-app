FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .


# Build the Next.js application
RUN npm run build


# Start the Next.js application
CMD ["npx", "start"]