import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

function getStyleName(valueName) {
  const className = {
    "C": "clear",
    "+": "opt",
    "-": "opt",
    "x": "opt",
    "÷": "opt",
    "=": "equals"
  }
  return className[valueName]
}

export default function Button({ value }) {
  const { calc, setCalc } = useContext(CalcContext);

  function handleButtonClick() {
    const buttons = {
      ".": decimalClick,
      "C": clearClick,
    }
    return buttons[value]()
  }


  // When user clicks on decimal point "." button
  function decimalClick() {
    return (
      setCalc({...calc, number: !calc.number.toString().includes('.') ? calc.number + value : calc.number})
    )
  }


  // When user clicks on clear "C" button
  function clearClick() {
    return (
      setCalc({
        opt: "",
        number: 0,
        result: 0
      })
    )
  }

  return (
    <button onClick={handleButtonClick} className={`${getStyleName(value)} button`}>
      {value}
    </button>
  )
}