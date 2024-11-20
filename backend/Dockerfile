# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . ./

# Build the TypeScript code
RUN npm run build

# Add Prisma CLI to the container
RUN npx prisma generate

# Expose the backend port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
