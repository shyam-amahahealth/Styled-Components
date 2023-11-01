import "./App.css";
import StyledButton, { FancyButton } from "./components/Button";

function App() {
  return (
    <div className="App">
      <StyledButton variant="outline">Styled Button</StyledButton>
      <StyledButton>Styled Button</StyledButton>
      <FancyButton>Styled Button</FancyButton>
    </div>
  );
}

export default App;
