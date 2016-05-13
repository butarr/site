#!/bin/bash

PATH=$PATH:/usr/local/node/node-default/bin

pushd /home/frida/components/site
  pm2 stop frida-hexo-generate
  git pull
  npm install

  pushd ./themes/main
    gulp build
  popd

  pm2 start pm2-config.json
popd
