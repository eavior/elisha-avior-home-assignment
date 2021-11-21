import { render, screen } from "@testing-library/react";
import FilmDetails from "./FilmDetails";

test("renders selected movie data or instruction to select movie", () => {
  render(<FilmDetails />);
  const element = screen.getByText(/Episode/i || /Please select/i);
  expect(element).toBeInTheDocument();
});
