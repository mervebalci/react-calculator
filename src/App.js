import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import CalcProvider from "./context/CalcContext";

export default function App() {
  const buttonValues = [
    ["C", "+/-", "%", "÷"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {buttonValues.flat().map((button, index) => {
            return (
              <Button
                value={button}
                key={index}
              />
            )
          })}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}