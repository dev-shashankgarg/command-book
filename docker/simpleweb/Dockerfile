FROM node:alpine

WORKDIR /usr/app

# only copy package.json to minimize rebuild (npm install) efforts due to code directory change
COPY ./package.json ./    
RUN npm install

COPY ./ ./

CMD ["npm" , "start"]

