import { cleanup, render, screen } from "@testing-library/react";
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
  it("render String Calculator header", () => {
      const { asFragment } = render(<Calculator />);
      const linkHeader = screen.getByText("String Calculator");
      expect(linkHeader).toBeInTheDocument();
      expect(asFragment()).toHaveTextContent("String Calculator");
      expect(asFragment()).toMatchSnapshot();
      expect(asFragment()).toBeTruthy();
    });
});
