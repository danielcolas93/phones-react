FROM node:10.16.0
WORKDIR /client
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile
COPY . ./
EXPOSE 3000
CMD ["yarn", "start"]
