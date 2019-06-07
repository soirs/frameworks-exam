import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react'

it('renders witout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div)
});
afterEach(cleanup)
it('render App with header text = MARKET', () => {
  const { getByText } = render(<App />);
  expect (getByText(/Market/i)).toBeInTheDocument();
});
