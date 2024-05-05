FROM alpine:latest AS db
ARG PB_VERSION=0.22.11
RUN apk add --no-cache unzip ca-certificates
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

FROM node:20-alpine AS node-base
ENV POCKETBASE_DB=http://0.0.0.0:8090
ENV POCKETBASE=0.0.0.0:8090
ENV NODE_ENV=production
ENV ORIGIN=http://arch.local:3002

FROM node-base AS builder
WORKDIR /app
COPY package*.json ./
RUN ls
RUN npm i
COPY . .
RUN npm run build
RUN npm prune --omit=dev

FROM node-base
WORKDIR /pb
COPY --from=db /pb/pocketbase ./
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json ./
COPY ./script/ /bin/script
RUN chmod +x /bin/script/script.sh
EXPOSE 3000
CMD [ "/bin/script/script.sh"]
