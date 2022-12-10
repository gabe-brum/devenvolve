import theme from "@styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px 0;
  font-family: 'Antonio', sans-serif;
  color: ${theme.colors.darkGreen};

  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: 500px;
  }
`

export const ContainerInfo = styled.div`
  background-color: ${theme.colors.lightGray};
  border-radius: 20px;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 40px;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.tablet}) {
    min-height: 160px;
    justify-content: space-between;
  }

  > h3 {
    font-size: 28px;
    text-align: center;
    font-weight: ${theme.fontWeights.bold};
  }

  .infos-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 5px 0 30px 0;
    font-size: 14px;

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 18px;
    }

    > p > span {
      font-family: 'Sacramento', cursive;
    }
  }

  > p {
    font-size: 14px;
    text-align: center;

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 18px;
    }
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 10px;
  width: 100%;

  .button {
    border-radius: 20px;
    cursor: pointer;
    height: 40px;
    font-size: 12px;
    border: none;
    outline: none;
    font-weight: ${theme.fontWeights.bold};
    transition: all .5s;
    width: 50%;
    font-family: 'Antonio', sans-serif;

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 16px;
    }
  }

  .primary {
    background-color: ${theme.colors.blackGray};
    color: ${theme.colors.lightGreen};

    &:hover {
      background-color: ${theme.colors.blackGrayHover};
    }
  }

  .secondary {
    background-color: ${theme.colors.green};
    color: ${theme.colors.lightGray};

    &:hover {
      background-color: ${theme.colors.greenHover};
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