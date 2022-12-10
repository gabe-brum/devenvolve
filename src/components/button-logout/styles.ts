import theme from "@styles/theme";
import styled from "styled-components";

export const ContainerButton = styled.button`
  align-items: center;
  background-color: ${theme.colors.darkGreen};
  border: none;
  bottom: 80px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px ${theme.colors.blackGray};
  color: ${theme.colors.lightGray};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-family: "Antonio", sans-serif;
  height: 40px;
  justify-content: center;
  outline: none;
  position: fixed;
  right: 15px;
  transition: all .5s;
  width: 60px;
  z-index: 1;

  @media (min-width: ${theme.breakpoints.tablet}) {
    bottom: 50px;
    right: 10px;
    width: 100px;
  }

  &:hover {
    background-color: ${theme.colors.darkGreenHover};
  }
` 