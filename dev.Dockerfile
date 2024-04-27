FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npx prisma generate

COPY prisma ./prisma/
COPY startup.sh ./dev.startup.sh
RUN chmod +x /app/dev.startup.sh


EXPOSE 3000

ENTRYPOINT ["sh","/app/dev.startup.sh"]





