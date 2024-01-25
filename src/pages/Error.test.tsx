import { render, screen } from '@testing-library/react';
import Error from './Error';
import { BrowserRouter } from 'react-router-dom';

const ErrorComponent = (
  <BrowserRouter>
    <Error title='Test Error' message='This is a test error message' />
  </BrowserRouter>
);

describe('Error Page', () => {
  it('renders the title and message', () => {
    render(ErrorComponent);

    expect(screen.getByText('Test Error')).toBeDefined();
    expect(screen.getByText('This is a test error message')).toBeDefined();
  });

  it('renders the return to home link', () => {
    render(ErrorComponent);

    const linkElement = screen.getByText('Return to Home');
    expect(linkElement).toBeDefined();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});