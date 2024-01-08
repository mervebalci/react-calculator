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
  return (
    <button className={`${getStyleName(value)} button`}>{value}</button>
  )
}