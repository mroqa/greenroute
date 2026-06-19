#!/bin/bash
cd /home/z/my-project
# Kill any existing instances
pkill -f "next dev" 2>/dev/null
sleep 1
# Start dev server with full daemon detachment (double-fork pattern)
nohup bash -c 'exec bun run dev' > /tmp/dev-raw.log 2>&1 < /dev/null &
echo "Dev server started with PID $!"
