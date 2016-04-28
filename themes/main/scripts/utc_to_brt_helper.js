var moment = require('moment-timezone');

function utcToBrt(utcDate) {
  return moment(utcDate).tz('America/Sao_Paulo');
}

hexo.extend.helper.register('utc_to_brt', utcToBrt);
