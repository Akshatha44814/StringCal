import CalculatorPage from "../CalculatorPage/CalculatorPage";
import "./Calculator.css";

const Calculator = () => {
  return (
    <div className="conatiner">
      <h1>String Calculator</h1>
      <p className="content">Enter numbers</p>
      <p className="content">
        {"(Format:"}
        <span className="colorContent" data-testid="redColor">
          {"//[delimiter]\n[numbers]"}
        </span>
        {")"}
      </p>
      <CalculatorPage/>
    </div>
  );
};
export default Calculator;
