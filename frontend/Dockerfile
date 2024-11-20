# Use official Node.js image for building
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and package-lock.json to cache dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project (including src/app)
COPY . .

# Build the Next.js application
RUN npm run build

# Use a lightweight Node.js image for serving the app
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app ./

# Install production dependencies only
RUN npm install --omit=dev

# Expose port 3000 for the Next.js application
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "start"]
