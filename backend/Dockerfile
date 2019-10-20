FROM node:10.16.0
WORKDIR /api
COPY package*json /api/
RUN npm i --quiet
COPY . /api/
EXPOSE 80
CMD ["npm", "start"]
