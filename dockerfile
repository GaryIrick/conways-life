FROM node:10.15.0
ENV NODE_ENV production
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
COPY server.js .
COPY index.html .
COPY public public
COPY api api
COPY lib lib
RUN npm install
ENV PORT 5001
EXPOSE 5001
CMD [ "node", "server.js" ]