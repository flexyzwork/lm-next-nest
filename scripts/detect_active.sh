#!/bin/bash

LOG_FILE="detect_active.log"

ACTIVE=$(docker ps --format '{{.Names}}' | grep -q "backend-blue" && echo "blue" || echo "green")

echo "$(date '+%Y-%m-%d %H:%M:%S') - Checking active deployment color - Active: $ACTIVE" >> "$LOG_FILE"

echo "$ACTIVE"