function cssVersion(){
  var jsonObj= require("../source/rev-manifest.json");
  var cssVersion = jsonObj["main.css"];

  return "/css/" + cssVersion;
}

hexo.extend.helper.register('css_version', cssVersion);
