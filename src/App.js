import "./App.css";
import StyledButton from "./components/Button";

function App() {
  return (
    <div className="App">
      <StyledButton variant="outline">Styled Button</StyledButton>
      <StyledButton>Styled Button</StyledButton>
    </div>
  );
}

export default App;
