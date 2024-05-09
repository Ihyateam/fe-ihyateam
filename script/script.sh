#!/bin/sh
set -a;
source /app/.env.production;
set +a;
/pb/pocketbase serve --http="${POCKETBASE}" \
                     --origins="${BASE_URL},${API_URL}" &
/caddy/caddy run --config /caddy/Caddyfile &
node /app/build
