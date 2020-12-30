import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import Button from '..';

test('Contained button should have background', () => {
  const component = renderer.create(<Button variant="contained">Default</Button>);
  const tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree.props.className).toMatch('contained');
});
