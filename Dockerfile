# API Dockerfile

FROM node:14-slim

WORKDIR /home/node/api

COPY ./package*.json ./
RUN npm install

COPY . .

# RUN npm run build 
# This would be the dockerfile for prod
# do we need this command here? idk

CMD ["npm", "run", "start"]