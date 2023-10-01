import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import { Header, Props } from './Header';

describe('Header', () => {
  const testProps: Props = {
    handleLogin: jest.fn(),
    handleLoginWithGoogle: jest.fn(),
  };

  test('renders correctly', () => {
    render(<Header {...testProps} />);

    const text = screen.getByRole('heading', { name: 'Header' });
    expect(text).toBeInTheDocument();
  });
});
