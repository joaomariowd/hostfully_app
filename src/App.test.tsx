import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import App from "./App";

describe('App Component', () => {
  test("Renders the main page", () => {
    const { getByText, getByLabelText } = render(<App />);
    expect(getByText('Available Properties')).toBeInTheDocument();
    const selectElement = getByLabelText('Type');
    expect(selectElement.tagName).toBe('DIV');
  })
});