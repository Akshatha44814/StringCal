import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Calculator from "./Calculator/Calculator";
import "./index.css";
import "./Calculator/Calculator.css";

afterEach(cleanup);

test("renders Main App Component", () => {
  render(<App />);
});
describe("renders Calculate Component", () => {
  it("elements of the page", () => {
    render(<Calculator />);
    const linkHeader = screen.getByText("String Calculator");
    expect(linkHeader).toBeInTheDocument();

    const linkLabel = screen.getByText("Enter numbers");
    expect(linkLabel).toBeInTheDocument();
    const inputStringField = screen.getByPlaceholderText(
      "E.G.,//;\\n1;2;3 or 1,2,3"
    );
    expect(inputStringField).toBeInTheDocument();
    const value = "1,2,3";
    fireEvent.change(inputStringField, {
      target: {
        value,
      },
    });
    expect(inputStringField).toHaveValue("1,2,3");

    const buttonEl = screen.getByText("Calculate");
    userEvent.click(buttonEl);
    expect(buttonEl).toHaveTextContent("Calculate");

    const outputStringField = screen.getByPlaceholderText("Result Output");
    expect(outputStringField).toBeInTheDocument();
    expect(outputStringField).toBeDisabled();
    expect(outputStringField).toHaveValue("6");
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
  });
  it("should render the value of negative number and error message", () => {
    render(<Calculator negativeNumbers="-1,-2" error={true} />);
    const inputStringField = screen.getByPlaceholderText(
      "E.G.,//;\\n1;2;3 or 1,2,3"
    );
    expect(inputStringField).toBeInTheDocument();
    const NegativeError = () => (
      <span className="content colorContent">
        {"Negative numbers not allowed :-1,-2"}
      </span>
    );
    const { asFragment } = render(<NegativeError />);

    expect(asFragment()).toHaveTextContent(
      "Negative numbers not allowed :-1,-2"
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
