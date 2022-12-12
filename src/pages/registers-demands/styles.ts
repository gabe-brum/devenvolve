import theme from "@styles/theme";
import styled from "styled-components";

export const ApplicationDemandStyle = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px 30px;
  width: 100%;
  margin-bottom: 120px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: 20px 65px;
    justify-content: center;
    margin-bottom: 80px;
  }

  .not-found {
    display: flex;
    flex-direction: column;
    font-family: 'Sacramento', cursive;

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
      font-family: "Antonio", sans-serif;
      font-weight: ${theme.fontWeights.bold};
      font-size: 16px;
      transition: all .5s;
      width: 100%;

      &:hover {
        background-color: ${theme.colors.blackGrayHover};
      }
    }
  }

  .new-demand {
    position: fixed;
    bottom: 150px;
    right: 15px;
    box-shadow: 2px 2px 5px ${theme.colors.blackGray};
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
    font-family: "Antonio", sans-serif;

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

export const DemandModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${theme.colors.darkGreen};
  font-family: "Antonio", sans-serif;
  font-weight: ${theme.fontWeights.bold};

  .title-and-value {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: ${theme.breakpoints.tablet}) {
      flex-direction: row;
      gap: 0 20px;

      > .wrapper-content {
        width: 100%;
      }
    }
  }

  .wrapper-content {
    display: flex;
    flex-direction: column;
    gap: 5px 0;
    margin-top: 20px;

    > label {
      font-size: 16px;
    }

    .input {
      display: flex;
      align-items: flex-start;
      height: 35px;
      background-color: ${theme.colors.lightGray};
      border-radius: 20px;
      border: 1px solid ${theme.colors.darkGreen};
      padding: 0 15px;
      outline: none;
      font-family: "Antonio", sans-serif;

      &:focus {
        border: 2px solid ${theme.colors.darkGreen};
      }

      @media (min-width: ${theme.breakpoints.tablet}) {
        height: 45px;
      }

      &.description {
        padding: 5px 15px;
        height: 100px;
        outline: none;
        resize: none;
        font-family: "Antonio", sans-serif;
      }
    }

    &--stack {
      display: flex;
      flex-direction: row;
      gap: 0 10px;
      flex-wrap: wrap;

      @media (min-width: ${theme.breakpoints.tablet}) {
        gap: 0 20px;
      }

      > label {
        font-size: 12px;
      }
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    margin-top: 20px;

    @media (min-width: ${theme.breakpoints.tablet}) {
      flex-direction: row;
      gap: 0 15px;
    }

    .button {
      border: none;
      border-radius: 20px;
      height: 40px;
      font-weight: ${theme.fontWeights.bold};
      width: 100%;
      cursor: pointer;
      transition: all .5s;
      font-family: "Antonio", sans-serif;
      font-size: 14px;

      &.cancel {
        background-color: ${theme.colors.darkGreen};
        color: ${theme.colors.lightGreen};

        &:hover {
          background-color: ${theme.colors.darkGreenHover};
        }
      }

      &.save {
        background-color: ${theme.colors.blackGray};
        color: ${theme.colors.lightGreen};

        &:hover {
          background-color: ${theme.colors.blackGrayHover};
        }
      }
    }
  }
`