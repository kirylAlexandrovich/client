# Use a lighter version of Node as a parent image

# Set the working directory to /client

# copy package.json into the container at /client

# install dependencies

# Copy the current directory contents into the container at /client

# Make port 3000 available to the world outside this container

# Run the app when the container launches

FROM mhart/alpine-node:8.11.4
WORKDIR /client
COPY package*.json /client/
RUN npm install
COPY . /client/
EXPOSE 3000
CMD [“npm”, “start”]