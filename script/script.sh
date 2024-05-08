#!/bin/sh
/pb/pocketbase serve --http=${POCKETBASE} &
/caddy/caddy run --config /caddy/Caddyfile &
node /app/build
