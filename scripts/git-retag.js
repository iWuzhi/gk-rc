/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const child_process = require('child_process');

const packageJSON = require('../package.json');

child_process.execSync(`git tag -d v${packageJSON.version}`);
child_process.execSync(`git tag v${packageJSON.version}`);