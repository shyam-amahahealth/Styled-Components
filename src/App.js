import "./App.css";
import { AnimatedLogo } from "./components/Animation";
import StyledButton, { FancyButton, SubmitButton } from "./components/Button";
import logo from "./logo.svg";
function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <AnimatedLogo src={logo} />
      <StyledButton type="submit" variant="outline">
        Styled Button
      </StyledButton>
      <StyledButton>Styled Button</StyledButton>
      <FancyButton as="a">Styled Button</FancyButton>
      <SubmitButton>Styled Button</SubmitButton>
    </div>
  );
}

export default App;
