var gitHashShort = require('child_process').execSync('git rev-parse --short HEAD').toString().trim();

function gitHash() {
  return gitHashShort;
}

hexo.extend.helper.register('git_hash', gitHash);
