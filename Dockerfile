FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun ci
RUN bun run build
CMD ["bun", "run", "start", "-p", "80"]
EXPOSE 80