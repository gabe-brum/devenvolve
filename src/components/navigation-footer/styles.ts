import theme from "@styles/theme";
import styled from "styled-components";

export const Footer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 0 10px;

  .itemMenu {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px 20px 0 0;
    width: 70px;
    height: 55px;
    transition: all .5s;
    background-color: ${theme.colors.green};

    &:hover {
      background-color: ${theme.colors.greenHover};
    }

    &.clicked {
      background-color: ${theme.colors.darkGreen};
    }
  }
`