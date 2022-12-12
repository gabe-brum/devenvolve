import theme from "@styles/theme";
import styled from "styled-components";

export const ApplicationDemandStyle = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px 30px;
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: 20px 65px;
    justify-content: center;
  }

  .not-found {
    display: flex;
    flex-direction: column;
    font-family: 'Sacramento', cursive;

    @media (min-width: ${theme.breakpoints.tablet}) {
      max-width: 500px;
    }

    &--text {
      color: ${theme.colors.darkGreen};
      font-size: 32px;
      text-align: center;
    }

    &--go-to-initial{
      background-color: ${theme.colors.blackGray};
      border-radius: 20px;
      border: none;
      cursor: pointer;
      outline: none;
      margin: 20px 0;
      height: 40px;
      font-size: 16px;
      color: ${theme.colors.lightGreen};
      transition: all .5s;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      font-family: "Antonio", sans-serif;
      font-weight: ${theme.fontWeights.bold};
      width: 100%;

      &:hover {
        background-color: ${theme.colors.blackGrayHover};
      }
    }
  }
`