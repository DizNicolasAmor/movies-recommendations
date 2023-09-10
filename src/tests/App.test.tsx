import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../test-utils';
import App from '../App';

describe('App', () => {
  test('renders correctly', () => {
    render(<App />);

    const text = screen.getByTestId('app');
    expect(text).toBeInTheDocument();
  });
});
