import { render } from "@testing-library/react";
import Main from "./Main";
import TOC from "./TOC";

describe("Main", () => {
  test("renders App component", () => {
    render(<Main />);
    render(<TOC allFilms={[{ title: "Test film", created: "123" }]} />);
  });
});
