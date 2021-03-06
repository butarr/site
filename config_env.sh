#!/usr/bin/env bash
cat <<EOF > _config.yml
# Hexo Configuration
## Docs: http://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site
title: Brasil de Fato
subtitle: Uma visão popular do Brasil e do mundo
description: Uma visão popular do Brasil e do mundo
separator: "|"
logo: "/img/logo.svg"
language: pt-br

social:
  facebook_url: 'http://www.facebook.com/brasildefato'

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: '$SITE_URL'
root: /
baseurl: '/'
permalink: :url

# Directory
source_dir: /home/frida/hexo_source
public_dir: /home/frida/components/site/public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:

# Category & Tag
default_category: uncategorized
category_map:
tag_map:

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: DD [de] MMMM [de] YYYY
time_format: "[às] HH:mm"

# Pagination
## Set per_page to 0 to disable pagination
per_page: 10
pagination_dir: page

# Extensions
## Plugins: http://hexo.io/plugins/
## Themes: http://hexo.io/themes/
theme: main

#Toggles
toggles:
  _D6fenTno_adsense: ${TOGGLE_D6fenTno_ADSENSE:-false}
  language_nav: ${TOGGLE_LANGUAGE_NAV:-false}
  _test_environment: ${TOGGLE_TEST_ENVIROMENT:-false}
feed:
  type: rss2
  limit: 20
  hub:
EOF

cat <<EOF >.env
CERT_FILE_PATH=$CERT_FILE_PATH
KEY_FILE_PATH=$KEY_FILE_PATH
HEXO_GENERATE_USERNAME=$HEXO_GENERATE_USERNAME
HEXO_GENERATE_PASSWORD=$HEXO_GENERATE_PASSWORD
EOF
