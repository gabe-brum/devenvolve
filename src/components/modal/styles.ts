import theme from "@styles/theme";
import styled from "styled-components";
import { ModalProps } from "./types";

export const Container = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  height: 100vh;
  overflow-y: auto;
  width: 100%;

  .overlay {
    border: none;
    height: 100%;
    width: 100%;
    display: block;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .container-content {
    background-color: ${theme.colors.lightGray};
    max-width: 790px;
    width: 95%;
    margin: 30px auto;
    top: 0;
    position: relative;
    padding: 30px 40px;
    transform: translateY(0);
    border-radius: 20px;
  }

  .close-button {
    width: 25px;
    position: absolute;
    top: 10px;
    right: 15px;
    border: 1px solid ${theme.colors.lightGreen};
    padding: 5px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.darkGreen};;
    border-radius: 20px;
    cursor: pointer;
    color: ${theme.colors.lightGreen};
    font-size: 12px;
  }
`