FROM node:18.12.0

RUN apt-get update && \
  apt-get install --no-install-recommends -y \
  libgtk2.0-0 \
  libgtk-3-0 \
  libnotify-dev \
  libgconf-2-4 \
  libgbm-dev \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb \
  fonts-arphic-bkai00mp \
  fonts-arphic-bsmi00lp \
  fonts-arphic-gbsn00lp \
  fonts-arphic-gkai00mp \
  fonts-arphic-ukai \
  fonts-arphic-uming \
  ttf-wqy-zenhei \
  ttf-wqy-microhei \
  xfonts-wqy \
  && rm -rf /var/lib/apt/lists/*

RUN apt-get update
RUN apt-get install -y fonts-liberation libappindicator3-1 xdg-utils

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./

EXPOSE 8080

RUN chmod +x entrypoint.sh
CMD ./entrypoint.sh