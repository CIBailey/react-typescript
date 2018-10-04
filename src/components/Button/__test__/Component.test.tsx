import * as React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';

// tslint:disable-next-line:import-name
import Component from '../index';

describe('BUTTON COMPONENT', () => {
  const component: ReactTestRenderer.ReactTestRenderer = ReactTestRenderer.create(<Component color={'info'} />);

  it('checking snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('test', () => {
    const tree: unknown = component.toJSON();
    expect(tree).toBeDefined();
  });
});
