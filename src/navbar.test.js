import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './header';

test('Check Category', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Categories/i); 
  expect(linkElement).toBeInTheDocument();

});

test('Check Feedback', () => {
    render(<Header />);
    const linkElement = screen.getByText(/Feedback/i); 
    expect(linkElement).toBeInTheDocument();
  
  });

  test('Check Order', () => {
    render(<Header />);
    const linkElement = screen.getByText(/Order/i); 
    expect(linkElement).toBeInTheDocument();
  
  });
