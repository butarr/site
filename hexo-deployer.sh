#!/bin/bash

SITE_HOME=$1
SITE_DEST=$2
HEXO=$SITE_HOME/node_modules/hexo/bin/hexo

$HEXO clean --cwd $SITE_HOME
$HEXO generate --cwd $SITE_HOME

rsync -rtvu --delete $SITE_HOME/public/ $SITE_DEST