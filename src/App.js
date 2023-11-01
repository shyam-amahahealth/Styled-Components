import "./App.css";
import StyledButton, { FancyButton } from "./components/Button";

function App() {
  return (
    <div className="App">
      <StyledButton variant="outline">Styled Button</StyledButton>
      <StyledButton>Styled Button</StyledButton>
      <FancyButton as="a">Styled Button</FancyButton>
    </div>
  );
}

export default App;
