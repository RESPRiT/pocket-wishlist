# syntax=docker/dockerfile:1

# Build
FROM oven/bun:latest AS build

WORKDIR /home/bun/app

COPY package.json ./
COPY /packages/wishlist-web ./packages/wishlist-web
COPY /packages/wishlist-shared ./packages/wishlist-shared

RUN bun install

WORKDIR /home/bun/app/packages/wishlist-web
RUN bun run build

# Serve
FROM nginx:bookworm
COPY --from=build /home/bun/app/packages/wishlist-web/dist /usr/share/nginx/html
EXPOSE 80
