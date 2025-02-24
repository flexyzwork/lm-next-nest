# 1. Next.js 빌드
FROM node:20-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm@10.4.1

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build || (echo "Build failed" && exit 1)

# 2. 실행 환경 (최소한의 파일만 유지)
FROM node:20-alpine AS runtime
RUN apk update && apk add curl

WORKDIR /app

# Next.js standalone 실행 파일만 복사 (node_modules 불필요)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# 불필요한 캐시 제거
RUN rm -rf .next/cache

# 실행 포트 설정
EXPOSE 3000

# Next.js 실행
CMD ["node", "server.js"]