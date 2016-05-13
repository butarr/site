#!/bin/bash

PATH=$PATH:/usr/local/node/node-default/bin

pushd /home/frida/components/site
  pm2 stop frida-hexo-generate
  git stash
  git pull
  git stash pop
  npm install

  pushd ./themes/main
    gulp build
  popd

  pm2 start pm2-config.json
popd
