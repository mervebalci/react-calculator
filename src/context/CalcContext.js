import { createContext, useState } from "react";

// EXPORT to make context available for components in different files
export const CalcContext = createContext();

export default function CalcProvider({ children }) {
  const [calc, setCalc] = useState({
    opt: "",
    number: 0,
    result: 0
  });

  const providerValue = {calc, setCalc}

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  )
}