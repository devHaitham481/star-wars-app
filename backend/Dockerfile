# Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN npm run build

CMD ["node", "dist/main"]
