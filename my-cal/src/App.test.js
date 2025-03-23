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
  it("render Calculate component", () => {
    render(<Calculator />);
  });

  it("render String Calculator header", () => {
    render(<Calculator />);
    const linkHeader = screen.getByText("String Calculator");
    expect(linkHeader).toBeInTheDocument();
  });

  it("render Enter numbers label", () => {
    render(<Calculator />);
    const linkLabel = screen.getByText("Enter numbers");
    expect(linkLabel).toBeInTheDocument();
  });

  it("render Calculate component", () => {
    render(<Calculator />);
  });

  it("Input string Onclick calculate show output", () => {
    render(<Calculator />);
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
    const negativeString = "-1,-2";
    render(<Calculator negativeNumbers={negativeString} error={true} />);

    const NegativeError = () => (
      <span className="content colorContent">
        {`Negative numbers not allowed :${negativeString}`}
      </span>
    );
    const { asFragment } = render(<NegativeError />);
    const inputStringField2 = screen.getByPlaceholderText(
      "E.G.,//;\\n1;2;3 or 1,2,3"
    );
    fireEvent.change(inputStringField2, {
      target: {
        negativeString,
      },
    });
    expect(inputStringField2).toBeInTheDocument();

    expect(asFragment()).toHaveTextContent(
      "Negative numbers not allowed :-1,-2"
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
