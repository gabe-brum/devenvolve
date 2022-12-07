import theme from "@styles/theme";
import styled from "styled-components";

export const Checkbox = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  color: ${theme.colors.darkGreen};
  width: fit-content;

  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  > .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: ${theme.colors.lightGray};
    border: 1px solid ${theme.colors.darkGreen};
  }

  &:hover input ~ .checkmark {
    background-color: ${theme.colors.lightGreen};
  }

  > input:checked ~ .checkmark {
    background-color: ${theme.colors.darkGreen};
  }

  > .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  > input:checked ~ .checkmark:after {
    display: block;
  }

  > .checkmark:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`