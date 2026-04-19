FROM node:24-alpine3.23 AS dev

WORKDIR /app

COPY package*.json ./

RUN npm ci 

COPY tsconfig*.json .
COPY nest-cli.json .
COPY src src

EXPOSE $PORT
EXPOSE 9229
CMD [ "node", "--run", "dev" ]

FROM node:24-alpine3.23 AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY tsconfig*.json .
COPY nest-cli.json .
COPY src src

RUN npm run build
RUN npm prune --omit=dev

FROM node:24-alpine3.23 AS prod

ENV NODE_ENV=production

COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 3000
CMD [ "node", "dist/main.js" ]