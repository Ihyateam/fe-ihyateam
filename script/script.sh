#!/bin/sh
/pb/pocketbase serve --https="${POCKETBASE}" \
                     --https="${POCKETBASE}" \
                     --origins="${BASE_URL},${API_URL}" &
/caddy/caddy run --config /caddy/Caddyfile &
node /app/build
