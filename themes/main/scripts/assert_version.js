function assertVersion(assert){
  switch(assert) {
    case 'main.css':
      cssVersion = extractVersion('../source/css/rev-manifest.json','main.css')
      return "/css/" + cssVersion;
      break;
    case 'main.js':
      jsVersion = extractVersion('../source/js/rev-manifest.json','main.js')
      return "/js/" + jsVersion;
      break;
  }
}

function extractVersion(file, assert){
  var jsonObj= require(file);
  var version = jsonObj[assert];

  return version;
}

hexo.extend.helper.register('assert_version', assertVersion);
