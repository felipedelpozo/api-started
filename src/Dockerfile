FROM node

RUN npm install -g pm2@latest
RUN mkdir -p /opt/src
WORKDIR /opt/src

ADD package.json /opt/app/package.json
ADD processes.json /opt/app/processes.json

RUN cd /opt/src && npm install

EXPOSE 3000
EXPOSE 5858

CMD ["pm2-docker", "--json", "--watch", "processes.json"]
