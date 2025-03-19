import "./Calculator.css"

const Calculator = () =>{
    return <div className="conatiner">
        <h1>String Calculator</h1>
        <div className="content">Enter numbers</div>
        <div className="content">(Format:<span className="colorContent">//[delimiter]\n[numbers]</span>)</div>
        <div><input type="text" className="input" placeholder="E.G.,//;\n1;2;3 or 1,2,3"/></div>
        <button className="calculate">Calculate</button>
    </div>
}
export default Calculator