var moment = require('moment-timezone');

function customFormatToMoment(isoUtcDateWithNumberSigns) {
  var isoUtcDate = isoUtcDateWithNumberSigns.replace('####', '');

  return moment(isoUtcDate).tz(this.config.timezone);
}

hexo.extend.helper.register('custom_format_to_moment', customFormatToMoment);
