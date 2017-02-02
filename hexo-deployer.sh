#!/bin/bash

SITE_HOME=$1
SITE_DEST=$2
SHOULD_CLEAN=$3
HEXO=$SITE_HOME/node_modules/hexo/bin/hexo

if [ ! -z "$(pgrep "hexo")" ] ; then
  echo "Hexo did not start because was already processing."
else
  if [ ${SHOULD_CLEAN:-clean} == "clean" ]; then
    $HEXO clean --cwd $SITE_HOME
  fi
  $HEXO generate --cwd $SITE_HOME
  rsync -rtvu --delete $SITE_HOME/public/ $SITE_DEST
fi
