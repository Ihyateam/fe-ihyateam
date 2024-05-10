#!/bin/sh -uav
source /app/.env.production;
/pb/pocketbase serve --http="${POCKETBASE}" \
                     --origins="${BASE_URL},${API_URL}" &
/caddy/caddy run --config /caddy/Caddyfile &
node /app/build
