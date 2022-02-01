import styled, { css, keyframes } from "styled-components";

const swapped = keyframes({
  from: {
    transform: "translate(400px, 0)",
    opacity: 0
  }
});

export const StyledMessage = styled.div.withConfig({
  shouldForwardProp: (prop) => prop === "children"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.8;
  ${({ type, theme: { colors } }) => css`
    background: ${colors[type]};
    border: 2px double dark ${colors[type]};
  `};
  color: white;
  border-radius: 5px;
  padding: 5px;
  margin-top: 5px;
  & span {
    display: flex;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 5px;
    border: thin solid white;
    border-radius: 50%;
    cursor: pointer;
  }
  animation: ${swapped} 1s;
`;
