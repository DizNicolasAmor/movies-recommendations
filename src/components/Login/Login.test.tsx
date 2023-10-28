import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
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

  test('fires handleLogin', async () => {
    const mockHandleLogin = jest.fn();
    render(<Login {...testProps} handleLogin={mockHandleLogin} />);
    const emailField = screen.getByLabelText('Email');
    const passwordField = screen.getByLabelText('Password');
    const submitButton = screen.getByText('Submit');

    const preventDefault = jest.fn();
    const event = { preventDefault };
    fireEvent.change(emailField, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordField, { target: { value: 'password123' } });

    fireEvent.submit(submitButton, event);

    await waitFor(() => {
      expect(mockHandleLogin).toHaveBeenCalled();
    });
  });

  test('does not fire handleLogin if form is empty', async () => {
    const mockHandleLogin = jest.fn();
    render(<Login {...testProps} handleLogin={mockHandleLogin} />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    const preventDefault = jest.fn();
    const event = { preventDefault };

    fireEvent.submit(submitButton, event);

    await waitFor(() => {
      expect(mockHandleLogin).not.toHaveBeenCalled();
    });
  });

  test('does not fire handleLogin if form is invalid', async () => {
    const mockHandleLogin = jest.fn();
    render(<Login {...testProps} handleLogin={mockHandleLogin} />);
    const emailField = screen.getByLabelText('Email');
    const passwordField = screen.getByLabelText('Password');
    const submitButton = screen.getByText('Submit');

    const preventDefault = jest.fn();
    const event = { preventDefault };
    fireEvent.change(emailField, { target: { value: 'Not an email' } });
    fireEvent.change(passwordField, { target: { value: 'password123' } });

    fireEvent.submit(submitButton, event);

    await waitFor(() => {
      expect(mockHandleLogin).not.toHaveBeenCalled();
    });
  });

  test('fires handleLoginWithGoogle', () => {
    const mockHandleLoginWithGoogle = jest.fn();
    render(<Login {...testProps} handleLoginWithGoogle={mockHandleLoginWithGoogle} />);
    const googleSignInButton = screen.getByText('Sign in with Google');

    fireEvent.click(googleSignInButton);

    expect(mockHandleLoginWithGoogle).toHaveBeenCalled();
  });
});
