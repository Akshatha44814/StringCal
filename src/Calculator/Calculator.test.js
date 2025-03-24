import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import CalculatorPage from "../CalculatorPage/CalculatorPage";

afterEach(cleanup);
describe("renders Calculate Component", () => {
  it("Render Calculate Body Component", () => {
    render(<CalculatorPage />);
  });
  it("Input string Onclick calculate show output", () => {
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

    const calculateSum = jest.fn();
    const { getByText } = render(<button onClick={() => calculateSum()} />);
    const buttonEl = getByText("Calculate");
    act(() => fireEvent.click(buttonEl));
    expect(buttonEl).toHaveTextContent("Calculate");
    expect(buttonEl).toBeTruthy();
    expect(buttonEl).toBeInTheDocument();
  });
});
