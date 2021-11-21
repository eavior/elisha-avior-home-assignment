import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders spinner text", () => {
  render(<App />);
  const element = screen.getByText(/please/i);
  expect(element).toBeInTheDocument();
});
