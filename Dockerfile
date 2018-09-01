FROM node:10.9.0
RUN mkdir /webapp
RUN npm install nodemon yarn -g
WORKDIR /webapp
ADD package.json /webapp/
RUN yarn install 
ADD . /webapp/
