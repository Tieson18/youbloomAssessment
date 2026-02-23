import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/Login';
import { BrowserRouter } from 'react-router-dom';

// Mock useNavigate
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Mock Auth Context
const mockLogin = jest.fn();

jest.mock('../context/AuthContext', () => ({
  useAuthContext: () => ({
    login: mockLogin,
  }),
}));

describe('Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('shows error when phone is empty', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(
      screen.getByText(/phone number is required/i)
    ).toBeInTheDocument();
  });

  test('shows error for invalid phone format', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    // MUI TextField renders an input with label association
    const input = screen.getByLabelText(/phone/i);

    fireEvent.change(input, { target: { value: '0712345678' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(
      screen.getByText(/enter a valid international phone number/i)
    ).toBeInTheDocument();
  });

  test('calls login and navigates when valid phone provided', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const input = screen.getByLabelText(/phone/i);

    fireEvent.change(input, {
      target: { value: '+14155552671' },
    });

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(mockLogin).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/main');
  });
});