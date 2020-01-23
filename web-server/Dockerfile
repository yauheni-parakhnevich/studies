FROM node:latest
ENV PORT 8080

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]