import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) =>
    props.variant === "outline" ? "#fff" : "#4caf50"};
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : " #fff")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: medium;
  cursor: pointer;
  transition: 0ms.5s all ease-out;
  margin: 5px;
`;
export default StyledButton;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;
