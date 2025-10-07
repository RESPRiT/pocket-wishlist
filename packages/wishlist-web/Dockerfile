# syntax=docker/dockerfile:1

# Build
FROM oven/bun:latest AS build

COPY . .

RUN bun install
RUN bun run build

# Serve
FROM nginx:bookworm
COPY --from=build /home/bun/app/dist /usr/share/nginx/html
EXPOSE 80
