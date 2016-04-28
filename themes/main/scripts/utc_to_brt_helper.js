var moment = require('moment-timezone');

function utcToBrt(utcDate) {
  var date;
  if(typeof utcDate === 'string') {
    date = moment(utcDate);
  } else {
    date = moment(utcDate.toISOString());
  }

  return date.tz('America/Sao_Paulo');
}

hexo.extend.helper.register('utc_to_brt', utcToBrt);
