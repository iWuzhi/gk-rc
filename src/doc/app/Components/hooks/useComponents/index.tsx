/**
 * author iWuzhi
 * date 2020-12-26 21:05:07
 */

import React from 'react';

const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(require.context('@/components', true, /demo\/index.mdx$/));

interface ComponentData {
  name: string;
  component: React.ElementType;
}

const components: ComponentData[] = Object.keys(cache).map((key) => {
  const Compoent = cache[key].default;
  const componentName = key.replace(/.*\/(\w+)\/demo\/index.mdx/, '$1');
  return {
    name: componentName,
    component: Compoent,
  };
});

console.log(components);
const useComponents = (): ComponentData[] => {
  return components;
};

export default useComponents;
