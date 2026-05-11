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

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD bun -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["bun", "run", "start"]
