'use strict';

var fs = require('fs');

var limit       = process.argv[2];
var hexo_source = process.argv[3];

var loadTestData = "---\nurl: /####/load-test-url/\nmost_read: true\nplace: load test place\nauthor: load test author\ndescription: load test description\ntitle: loast test title\nhat: load test hat\narea: nacional\ndisplay_area: none\nlayout: post\ndate: 2016-04-06T17:16:25.869Z\n---\n<p>coisa</p>"

var startTime = new Date().getTime();

for(var i = 0; i < limit; i++) {
  var fileName = startTime + '-' + i;
  var newPost = loadTestData.replace('####', fileName);
  fs.writeFileSync(hexo_source + '/_posts/' + fileName + '.md', newPost);
}
