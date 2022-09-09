FROM node:16

# build frontend
WORKDIR /usr/src/app/frontend
COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./
RUN npm ci

# build backend
WORKDIR /usr/src/app/backend
COPY ./backend/package.json ./
COPY ./backend/package-lock.json ./
RUN npm ci

WORKDIR /usr/src/app
COPY . .

WORKDIR /usr/src/app/frontend
RUN npm run build

WORKDIR /usr/src/app/backend
RUN npm run build

# run server
WORKDIR /usr/src/app/backend/
ENTRYPOINT ["node"]
CMD [ "./build/index.js"]
