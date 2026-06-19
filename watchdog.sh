#!/bin/bash
while true; do
  if ! pgrep -f "next dev" > /dev/null 2>&1; then
    cd /home/z/my-project
    nohup bash -c 'exec bun run dev' >> /tmp/dev-raw.log 2>&1 < /dev/null &
    echo "[$(date)] Restarted dev server" >> /tmp/watchdog.log
    sleep 10
  fi
  sleep 3
done
