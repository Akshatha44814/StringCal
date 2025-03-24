import { cleanup, render } from "@testing-library/react";
import CalculatorPage from "../CalculatorPage/CalculatorPage";

afterEach(cleanup);
describe("renders Calculate Component", () => {
  it("Render Calculate Body Component", () => {
    render(<CalculatorPage />);
  });
});
