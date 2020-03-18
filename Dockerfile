FROM node:10
WORKDIR /nest
COPY package.json /nest
RUN npm install
COPY . /nest
CMD npm run start
EXPOSE 5000 443 80