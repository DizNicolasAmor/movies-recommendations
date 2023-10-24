import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import { Login, Props } from './Login';

describe('Login', () => {
  const testProps: Props = {
    handleClose: jest.fn(),
    handleLogin: jest.fn(),
    handleLoginWithGoogle: jest.fn(),
    open: true,
  };

  test('renders correctly', () => {
    render(<Login {...testProps} />);

    const text = screen.getByRole('heading', { name: 'Login' });
    expect(text).toBeInTheDocument();
  });
});
