#!/bin/bash
# Check if dev server is running, start if not
if ! pgrep -f "next dev" > /dev/null 2>&1; then
  cd /home/z/my-project
  bun run dev > /tmp/dev-raw.log 2>&1 &
  echo "[$(date)] Started dev server" >> /tmp/keepalive.log
else
  echo "[$(date)] Dev server already running" >> /tmp/keepalive.log
fi
