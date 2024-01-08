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
    if (buttons[value]) {
      return buttons[value]()
    } else {
      return handleNumBtnClick()
    }
  }


  // When user clicks on any number button 0-9
  function handleNumBtnClick() {
    // First, stringfy the number values to multiply the digits
    const numberToString = value.toString()

    // To add multiple digits:
    let numberValue;
    // If number is 0 already, keep it as 0 when zero button is clicked more than once
    if (calc.number === 0 && numberToString === "0") {
      numberValue = "0"
    } else {
      numberValue = Number(calc.number + value)
    }
    return (
      setCalc({...calc, number: numberValue})
    )
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