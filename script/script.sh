#!/bin/sh
/pb/pocketbase serve --http=${POCKETBASE} &
node /app/build
