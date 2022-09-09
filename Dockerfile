FROM node:16
WORKDIR /usr/src/app
COPY . .
# build frontend
WORKDIR /usr/src/app/frontend
RUN npm ci
RUN npm run build

# build backend
WORKDIR /usr/src/app/backend
RUN npm ci
RUN npm run build

# run server
WORKDIR /usr/src/app/backend/
CMD ["node", "./build/index.js"]
