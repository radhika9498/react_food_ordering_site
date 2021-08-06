import { render, screen } from '@testing-library/react';
import App from './App';

test('Check welcome text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome To FoodiE/i); 
  //checking for Text
  expect(linkElement).toBeInTheDocument();

  //button test
  // const node = this.button;
  // ReactTestUtils.Simulate.click(node);
});