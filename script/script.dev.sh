#!/bin/sh
/pb/pocketbase serve --http=${POCKETBASE} &
npm run dev -- --host 0.0.0.0 --port 3000
