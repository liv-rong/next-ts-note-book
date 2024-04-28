FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g pnpm

RUN npx prisma generate

COPY prisma ./prisma/
COPY pnpm-lock.yaml ./
COPY package.json ./
COPY startup.sh ./startup.sh
RUN chmod +x /app/startup.sh

RUN apk update && apk add openssl

RUN npx prisma migrate deploy

EXPOSE 3000


ENTRYPOINT ["sh","/app/startup.sh"]






