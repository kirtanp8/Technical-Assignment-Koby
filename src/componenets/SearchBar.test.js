import { render, screen, fireEvent } from "@testing-library/react"
import SearchBar from "./SearchBar"
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'


test('check to see if handleSubmit works, when you search "SpringField", you get "Homer Simpson"', () => {
  const { getByTestId } = render(<SearchBar />);
  const textbox = screen.getByTestId('search-input');
  const submit = screen.getByRole('button');

  expect(screen.getByText("Search By")).toBeInTheDocument()

  fireEvent.change(screen.getByTestId("select"), {
    target: { value: "Search By Location" },
  });

  fireEvent.click(screen.getByText("Search By Location"));

  expect(screen.getByText("Search By Location")).toBeInTheDocument();

  userEvent.type(textbox, 'Springfield');
  userEvent.click(submit);
  
   const result = getByTestId('result'); 

   expect(result.textContent).toBe('Homer Simpson');
})

test('Check to see if Heading One renders',() => {
  render(<SearchBar />);
  const h1 = screen.getByText('How to Test:')
  expect(h1).toHaveTextContent('How to Test:')
});

test('Check to see if button renders', () => {
  render(<SearchBar />)
  const button = screen.getByRole('button')
  expect(button).toBeEnabled()
});

test('Checks to see if Search Input accepts a string', () => {
  render(<SearchBar />);
  const textbox = screen.getByTestId('search-input');
  userEvent.type(textbox, 'Springfield');
  expect(textbox).toHaveValue('Springfield');
});
