FROM oven/bun:latest
WORKDIR /app

COPY bun.lockb .
COPY package.json .
COPY src ./src

RUN bun install

CMD ["bun", "serve"]
EXPOSE 3000