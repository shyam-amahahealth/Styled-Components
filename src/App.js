import "./App.css";
import { ThemeProvider } from "styled-components";
import { AnimatedLogo } from "./components/Animation";
import StyledButton, { DarkButton, FancyButton, SubmitButton } from "./components/Button";
import logo from "./logo.svg";
const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <AnimatedLogo src={logo} />
        <StyledButton type="submit" variant="outline">
          Styled Button
        </StyledButton>
        <StyledButton>Styled Button</StyledButton>
        <FancyButton as="a">Styled Button</FancyButton>
        <SubmitButton>Styled Button</SubmitButton>
        <DarkButton>Styled Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
