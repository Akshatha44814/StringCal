import { cleanup, render } from "@testing-library/react";
import App from "./App";
import Calculator from "./Calculator/Calculator";

afterEach(cleanup);

test("renders Main App Component", () => {
  render(<App />);
});

describe("renders Calculate Component", () => {
  it("render Calculate component", () => {
    render(<Calculator />);
  });
});
