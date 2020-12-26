

const visit = require('unist-util-visit');
const yaml = require('js-yaml');
const fs = require('fs-extra');
const path = require('path');

module.exports = () => (tree) => {
  visit(tree, 'yaml', node => {
    const { value } = node;
    const data = yaml.safeLoad(value);
    const routesPath = path.join(process.cwd(), 'src/doc/app/routes.json');
    fs.ensureFileSync(routesPath);
    let sourceData = {};
    try {
      sourceData = fs.readJsonSync(routesPath)
    } catch(e) {
      // NOTE: It's should be silent or else you will puzzle
      // console.error(e);
    }
    const subRoutes = sourceData[data.category] || [];
    if (subRoutes.find(subRoute => (subRoute.type + subRoute.title) === (data.type + data.title))) {
      return;
    }
    subRoutes.push(data);
    sourceData[data.category] = subRoutes;
    try {
      fs.writeJsonSync(routesPath, sourceData);
    } catch (e) {
      // console.error(e);
    }
  })
}