FROM node:lts-alpine3.15
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production
RUN mkdir node_modules/.cache && chmod -R 770 node_modules/.cache
COPY . .
EXPOSE 3000
CMD ["npm", "start"]