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
    margin-bottom: 80px;
  }

  .not-found {
    display: flex;
    flex-direction: column;
    font-family: 'Antonio', sans-serif;

    @media (min-width: ${theme.breakpoints.tablet}) {
      max-width: 500px;
    }

    &--text {
      font-size: 32px;
      text-align: center;
    }

    &--new-demand {
      background-color: ${theme.colors.blackGray};
      border-radius: 20px;
      border: none;
      cursor: pointer;
      outline: none;
      margin: 20px 0;
      height: 40px;
      color: ${theme.colors.lightGreen};
      transition: all .5s;
      width: 100%;

      &:hover {
        background-color: ${theme.colors.blackGrayHover};
      }
    }
  }

  .new-demand {
    position: fixed;
    bottom: 80px;
    right: 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    height: 40px;
    font-size: 12px;
    background-color: ${theme.colors.blackGray};
    color: ${theme.colors.lightGreen};
    font-weight: ${theme.fontWeights.bold};
    transition: all .5s;
    width: 160px;
    z-index: 1;

    &:hover {
      background-color: ${theme.colors.blackGrayHover};
    }

    @media (min-width: ${theme.breakpoints.tablet}) {
      bottom: 10px;
      font-size: 16px;
      right: 120px;
      width: 250px;
    }
  }
`