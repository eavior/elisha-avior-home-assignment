import { render, screen } from "@testing-library/react";
import TOCItem from "./TOCItem";

describe("TOC test id", () => {
  test("renders App component", () => {
    render(
      <TOCItem
        key={1}
        index={0}
        title={"Test film"}
        titleSelectedFilm={"Test film"}
      />
    );
    const element = screen.getByText(/Test film/i);
    expect(element).toBeInTheDocument();
  });
});
