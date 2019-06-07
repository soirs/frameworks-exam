import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react'

import NewListing from './NewListing';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders submit', () => {
  const comp = (
    <Router>
      <NewListing handleSubmit={TestData} />
    </Router>
  );
  const { getByText, getByLabelText } = render(comp);
  expect(getByText(/.*title.*/i)).toBeInTheDocument();
  // expect(getByTitle getByLabelText('title')).toBeInTheDocument();
});
afterEach(cleanup)