#!/bin/bash

SITE_HOME=$1
SITE_DEST=$2
HEXO=$SITE_HOME/node_modules/hexo/bin/hexo

if [ ! -z "$(pgrep -x "hexo")" ] ; then
  echo "Hexo did not start because was already processing."
else
  $HEXO clean --cwd $SITE_HOME
  $HEXO generate --cwd $SITE_HOME
  rsync -rtvu $SITE_HOME/public/ $SITE_DEST
fi
