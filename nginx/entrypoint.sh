#!/bin/sh

# 기본값 설정 (컬러 기반)
: "${ACTIVE:=green}"

echo "🚀 Nginx 설정을 시작합니다."
echo "✅ ACTIVE: $ACTIVE"

# 환경 변수 적용하여 nginx.conf 생성
envsubst '$ACTIVE' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

echo "🚀 Nginx 새로 실행..."
exec nginx -g 'daemon off;'