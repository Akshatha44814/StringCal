import { useState } from "react";
import "./CalculatorPage.css";

const CalculatorPage = () => {
  const [result, setResult] = useState("");
  const [calculate, setCalculate] = useState("");
  const [error, setError] = useState(false);
  const [negativeNumbers, setNegativeNumbers] = useState([]);

  const inputMethod = (e) => {
    const inputValue = e.target.value.split("");
    if (inputValue.includes("-")) {
      setError(true);
      const res = e.target.value.match(/-?\d+/g).filter((a, b) => {
        if (a.includes("-")) {
          return true;
        }
      });
      setNegativeNumbers(res.join(","));
    } else {
      setError(false);
      const findNumber =
        inputValue.length > 0 &&
        inputValue.filter((a, b) => {
          if (!isNaN(parseInt(a))) {
            return true;
          }
        });
      const resultOutput =
        findNumber.length > 0
          ? findNumber?.reduce((c, d) => {
              return parseInt(c) + parseInt(d);
            })
          : 0;
      setCalculate(resultOutput);
    }
  };
  const calculateSum = () => {
    setResult(calculate);
  };
  return (
    <div className="conatinerPage">
      <div>
        <input
          type="text"
          className="input"
          placeholder="E.G.,//;\n1;2;3 or 1,2,3"
          onChange={(e) => inputMethod(e)}
        />
      </div>

      <button
        className="calculate"
        onClick={(e) => {
          calculateSum();
        }}
        disabled={error}
      >
        Calculate
      </button>
      {error ? (
        <span className="content colorContent">
          Negative numbers not allowed :{negativeNumbers}
        </span>
      ) : (
        <div className="resultInput">
          <input
            type="text"
            className="input"
            value={`${result}`}
            placeholder="Result Output"
            disabled
          />
        </div>
      )}
    </div>
  );
};
export default CalculatorPage;
