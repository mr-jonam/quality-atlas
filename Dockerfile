FROM node:22-alpine

WORKDIR /app
COPY package.json ./
COPY web ./web
COPY docs ./docs
COPY templates ./templates
COPY README.md LICENSE NOTICE ./

ENV HOST=0.0.0.0
ENV PORT=4173
EXPOSE 4173

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:4173/health || exit 1

CMD ["npm", "start"]
