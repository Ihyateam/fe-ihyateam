#!/bin/sh
/pb/pocketbase serve --http=${POCKETBASE} &
/caddy/caddy run --config /bin/script/Caddyfile.dev &
npm run dev -- --port 3000 --host 0.0.0.0
