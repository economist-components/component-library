import Library from '../index.es6';
import TestUtils from 'react-addons-test-utils';
import React from 'react';

describe(`The component library`, () => {
  describe(`is a React component`, () => {
    it('is compatible with React.Component', () => {
      Library.should.be.a('function').and.respondTo('render');
    });
    it(`renders a React element`, () => {
      React.isValidElement(<Library/>).should.equal(true);
    });
  });
  describe(`provides a basic branded MastHead`, () => {
    it(`has an Economist logo customisation`, () => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(React.createElement(Library));
      const shallowLibrary = shallowRenderer.getRenderOutput();
      const iconProps = shallowLibrary.props.children[0].props.children[0].props;
      iconProps.uri.should.equal('assets/icons.svg');
      iconProps.className.should.equal('library--economist-logo');
    });
  });
});
