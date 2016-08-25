var execSync = require('child_process').execSync;
process.env.SHORT_GIT_HASH = execSync('git rev-parse --short HEAD').toString().trim();
