/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const child_process = require('child_process');

const packageJSON = require('../package.json');

child_process.spawnSync(`git tag -d v${packageJSON.version}`);
child_process.spawnSync(`git push origin :refs/tags/v${packageJSON.version}`);
child_process.spawnSync(`git tag v${packageJSON.version}`);