# 1. 빌드 환경
FROM node:20-alpine AS builder
WORKDIR /app

# 2. 패키지 매니저 설정
RUN npm install -g pnpm@10.4.1

# 3. 종속성 설치 (캐시 활용)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 4. 소스 코드 복사 및 빌드
COPY . .
RUN pnpm build

# 5. devDependencies 제거 (프로덕션 종속성만 유지)
RUN pnpm prune --prod

# 6. 실행 환경 (초경량 Node.js)
FROM node:20-alpine AS runtime
WORKDIR /app
RUN apk update && apk add curl

# 7. 빌드된 결과만 복사 (node_modules 최소화)
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules

# 8. 불필요한 파일 제거
RUN rm -rf /app/node_modules/.cache /app/.git /app/tmp /app/.npm

# 9. 실행 포트 설정
EXPOSE 8001

# 10. 실행 명령어
CMD ["node", "dist/index.js"]