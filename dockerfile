FROM node:21.5.0

WORKDIR /app
COPY package.json ./
RUN npm install -g @angular/cli@17.0.10
RUN npm install
COPY . .
EXPOSE 4200
CMD npm run start