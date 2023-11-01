import "./App.css";
import StyledButton, { FancyButton, SubmitButton } from "./components/Button";

function App() {
  return (
    <div className="App">
      <StyledButton type="submit" variant="outline">Styled Button</StyledButton>
      <StyledButton>Styled Button</StyledButton>
      <FancyButton as="a">Styled Button</FancyButton>
      <SubmitButton >Styled Button</SubmitButton>
    </div>
  );
}

export default App;
