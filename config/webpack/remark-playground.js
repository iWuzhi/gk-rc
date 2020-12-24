

const visit = require('unist-util-visit');

module.exports = () => (tree) => {
  visit(tree, 'jsx', node => {
    const { value } = node;
    const reg = /^(<Playgroud[^>]*>)(.*)(<\/Playgroud>)$/s;  // 注意s修饰符的兼容性
    if (!reg.test(value)) return;
    node.value = value.replace(reg, '$1{`$2`}$3');
  })
}