import { render, screen } from "@testing-library/react";
import TOC from "./TOC";

describe("TOC test id", () => {
  test("renders App component", () => {
    render(<TOC allFilms={[{ title: "Test film", created: "123" }]} />);
    expect(screen.getByTestId("toc")).toBeInTheDocument();
  });
});
