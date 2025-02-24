# Nginx 설치
FROM nginx:latest

# Certbot 및 cron 설치
RUN apt-get update && apt-get install -y certbot python3-certbot-nginx cron

# Nginx 설정 파일 및 엔트리포인트 복사
COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY entrypoint.sh /entrypoint.sh
COPY cronfile /etc/cron.d/certbot-renew

# cron 실행 권한 설정
RUN chmod 0644 /etc/cron.d/certbot-renew
RUN crontab /etc/cron.d/certbot-renew

# 권한 설정
RUN chmod +x /entrypoint.sh

# 엔트리포인트 설정
ENTRYPOINT ["/bin/sh", "/entrypoint.sh"]