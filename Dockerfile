FROM node:18-alpine AS builder
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"] # 또는 ".next/standalone/server.js" 경로 확인

