#!/bin/sh

# 기본값 설정 (컬러 기반)
: "${ACTIVE:=green}"

echo "🚀 Nginx 설정을 시작합니다."
echo "✅ ACTIVE: $ACTIVE"

# 환경 변수 적용하여 nginx.conf 생성
envsubst '$ACTIVE' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Certbot이 사용할 웹 인증 디렉토리 생성
mkdir -p /var/www/certbot

# cron 서비스 실행 (자동 갱신을 위해 필요)
echo "🔄 cron 서비스 시작..."
cron -f &

# SSL 인증서 갱신 실행 (webroot 방식 사용)
echo "🔄 Certbot SSL 갱신 테스트 실행..."
certbot renew --webroot -w /var/www/certbot --quiet --post-hook "nginx -s reload" || true
echo "✅ Certbot 인증서 갱신 완료!"

# Nginx를 포그라운드에서 실행
echo "🚀 Nginx 최종 실행..."
exec nginx -g 'daemon off;'