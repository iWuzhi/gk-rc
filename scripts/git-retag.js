/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const child_process = require('child_process');

const packageJSON = require('../package.json');

child_process.execSync(`git tag -d v${packageJSON.version}`);
child_process.execSync(`git tag v${packageJSON.version}`);
child_process.execSync(`git push`);
child_process.execSync(`git push origin --tags`);
child_process.execSync(`git rebase master develop`);