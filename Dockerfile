# syntax=docker/dockerfile:1

FROM oven/bun:latest

WORKDIR /home/bun/app

COPY package.json ./
COPY /packages/wishlist-web ./packages/wishlist-web
COPY /packages/wishlist-shared ./packages/wishlist-shared

RUN bun install

ARG VITE_API_BASE
ENV VITE_API_BASE=$VITE_API_BASE

WORKDIR /home/bun/app/packages/wishlist-web
RUN bun run build

ENV PORT=3000
EXPOSE 3000

CMD ["bun", "run", "start"]
