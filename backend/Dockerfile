FROM node:10.16.0
WORKDIR /api
COPY package.json yarn.lock /api/
RUN yarn --pure-lockfile
COPY . /api/
EXPOSE 80
CMD ["yarn", "start"]
