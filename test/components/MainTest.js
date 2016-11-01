/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

/*import createComponent from 'helpers/shallowRenderHelper';

import Main from 'components/MainSection';

describe('MainComponent', () => {
  let MainComponent;

  beforeEach(() => {
    MainComponent = createComponent(Main);
  });

  it('should have its component name as default className', () => {
    expect(MainComponent.props.className).to.equal('index');
  });
});
*/



import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MainSection from 'components/MainSection'
import TodoItem from 'components/TodoItem'
import Footer from 'components/Footer'

// import { SHOW_ALL, SHOW_COMPLETED } from 'constants/TodoFilters'
export const SHOW_ALL = 'show_all'
export const SHOW_COMPLETED = 'show_completed'


const setup = propOverrides => {
  const props = Object.assign({
    todos: [
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }, {
        text: 'Run the tests',
        completed: true,
        id: 1
      }
    ],
    actions: {
      editTodo: function(){},
      deleteTodo: function(){},
      completeTodo: function(){},
      completeAll: function(){},
      clearCompleted: function(){}
    }
  }, propOverrides)

  const renderer = TestUtils.createRenderer()
  renderer.render(<MainSection {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('MainSection', () => {
    it('should render container', () => {
      const { output } = setup()
      console.log(output, 'output')
      expect(output.type).to.equal('section')
      expect(output.props.className).to.equal('main')
    })
  })
})
