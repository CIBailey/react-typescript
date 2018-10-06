import * as React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';

import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

// tslint:disable-next-line:import-name
import Component from '../index';

const Test = (
  <Component color={'info'} onClick={() => console.log('ty')}>
    <span>test</span>
  </Component>
);

describe('BUTTON COMPONENT', () => {
  const component: ReactTestRenderer.ReactTestRenderer = ReactTestRenderer.create(Test);

  it('checking snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Check if children is created', () => {
    expect(enzyme.shallow(Test).contains(<span>test</span>)).toBeTruthy();
  });

  it('Test props', () => {
    expect(enzyme.shallow(Test).prop('color')).toEqual('info');
  });

  it('simulate button', () => {
    enzyme
      .mount(Test)
      .find('button')
      .simulate('click');
  });
});
