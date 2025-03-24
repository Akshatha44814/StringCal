import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import CalculatorPage from "../CalculatorPage/CalculatorPage";

afterEach(cleanup);
describe("renders Calculate Component", () => {
  it("Input string Onclick calculate show output", () => {
    const calculateSum = jest.fn();

    render(<CalculatorPage />);
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

    const { getByText } = render(<button onClick={() => calculateSum()} />);
    const buttonEl = getByText("Calculate");
    act(() => fireEvent.click(buttonEl));
    expect(buttonEl).toHaveTextContent("Calculate");
    expect(buttonEl).toBeTruthy();
    expect(buttonEl).toBeInTheDocument();

    const outputStringField = screen.getByPlaceholderText("Result Output");
    expect(outputStringField).toBeInTheDocument();
    expect(outputStringField).toBeDisabled();
    expect(outputStringField).toHaveValue("6");
    expect(outputStringField).toBeTruthy();
  });

  it("should render the value of negative number and error message", () => {
    const negativeString = "-1,-2";
    render(<CalculatorPage negativeNumbers={negativeString} error={true} />);

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
    expect(asFragment()).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });
});
