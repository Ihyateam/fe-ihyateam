FROM alpine:latest AS setup
ARG PB_VERSION=0.22.11
ARG CADDY_VERSION=2.7.6
RUN apk add --no-cache unzip ca-certificates
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
ADD https://github.com/caddyserver/caddy/releases/download/v${CADDY_VERSION}/caddy_${CADDY_VERSION}_linux_amd64.tar.gz /tmp/caddy.tar.gz
RUN unzip /tmp/pb.zip -d /pb/ &&\
    mkdir -p /caddy &&\
    tar -xvf /tmp/caddy.tar.gz --directory=/caddy/

FROM node:alpine AS node-base
ENV POCKETBASE_DB=http://0.0.0.0:8090
ENV POCKETBASE=0.0.0.0:8090
ENV PUBLIC_POCKETBASE_HOST=https://maxlytica.com/db
ENV ORIGIN=https://maxlytica.com

FROM node-base AS builder
WORKDIR /app
COPY package*.json ./
RUN ls
RUN npm i
COPY ./ ./
RUN npm run build --omit=dev

FROM node-base
ENV NODE_ENV=production
WORKDIR /pb
COPY --from=setup /pb/pocketbase ./
WORKDIR /caddy
COPY --from=setup /caddy/caddy  ./
COPY ./script/Caddyfile ./
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json ./
WORKDIR /bin
COPY ./script/script.sh ./script.sh
RUN chmod +x /bin/script.sh
EXPOSE 80
EXPOSE 443
CMD ["/bin/script.sh"]
