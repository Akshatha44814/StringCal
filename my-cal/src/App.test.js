import {
  cleanup,
  render,
  screen,
} from "@testing-library/react";
import App from "./App";
import Calculator from "./Calculator/Calculator";
import "./index.css";
import "./Calculator/Calculator.css";
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

  it("render Enter numbers label", () => {
    const { asFragment } = render(<Calculator />);
    const linkLabel = screen.getByText("Enter numbers");
    expect(linkLabel).toBeInTheDocument();
    expect(asFragment()).toHaveTextContent("Enter numbers");
    expect(asFragment()).toMatchSnapshot();
    expect(asFragment()).toBeTruthy();
  });

  it("display the format label", () => {
    const Format = () => (
      <p>
        {"(Format:"}
        <span>{"//[delimiter]\n[numbers]"}</span>
        {")"}
      </p>
    );
    const { asFragment } = render(<Format />);
    expect(asFragment()).toHaveTextContent("(Format://[delimiter] [numbers])");
    expect(asFragment()).toMatchSnapshot();
    expect(asFragment()).toBeTruthy();
  });
});
