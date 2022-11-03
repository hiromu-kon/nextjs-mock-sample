FROM node:17.6.0

WORKDIR /app

COPY package.json yarn.lock ./
RUN npm install

COPY . .

CMD ["npm", "dev"]