import theme from "@styles/theme";
import styled from "styled-components";

export const DemandContainer = styled.div`
  background-color: ${theme.colors.lightGray};
  box-shadow: 2px 2px 5px ${theme.colors.blackGray};
  border-radius: 20px;
  color: ${theme.colors.darkGreen};
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  margin: 20px 0;
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    padding: 15px 30px;
    justify-content: space-between;
  }

  .image-brand {
    background-image: url(${(props) => props.imageBrand});
    background-color: ${theme.colors.darkGreen};
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    overflow: hidden;
    font-family: 'Antonio', sans-serif;
    width: 100%;
    height: 200px;

    &__layer {
      background-color: ${theme.colors.blackGray};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      color: ${theme.colors.lightGray};
      height: 100%;
      opacity: 0.6;

      > p {
        font-size: 22px;
      }
    }
  }

  .demand-brand {
    display: flex;
    flex-direction: row;
    font-family: 'Antonio', sans-serif;
    gap: 0 15px;
    width: 100%;

    @media (min-width: ${theme.breakpoints.tablet}) {
      width: 550px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      &--name {
        font-size: 24px;
      }

      &--stars {

      }
    }
  }

  .demand-content {
    color: ${theme.colors.darkGreen};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Antonio', sans-serif;
    gap: 15px;
    margin-top: 20px;
    width: 100%;

    @media (min-width: ${theme.breakpoints.tablet}) {
      align-items: end;
      justify-content: space-between;
      margin-top: 0;
      width: auto;
    }

    &__title-and-stack {
      display: flex;
      flex-direction: column;
      gap: 10px 0;
      text-align: center;

      @media (min-width: ${theme.breakpoints.tablet}) {
        text-align: end;
        gap: 0;
      }

      .title {
        font-size: 22px;
        text-align: center;
        font-weight: ${theme.fontWeights.bold};

        @media (min-width: ${theme.breakpoints.tablet}) {
          font-size: 24px;
        }
      }

      .stack {
        font-size: 16px;
        font-style: italic;

        @media (min-width: ${theme.breakpoints.tablet}) {
          font-size: 18px;
        }
      }
    }

    &__price-and-button {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 10px 0;
      width: 100%;

      .price {
        font-size: 26px;

        > span {
          margin-left: 10px;
          font-family: 'Sacramento', cursive;
        }
      }

      .button {
        background-color: ${theme.colors.darkGreen};
        color: ${theme.colors.lightGray};
        cursor: pointer;
        border: none;
        border-radius: 20px;
        font-family: 'Antonio', sans-serif;
        font-size: 14px;
        height: 40px;
        transition: all .5s;
        width: 150px;

        &:hover {
          background-color: ${theme.colors.darkGreenHover};
        }
      }
    }
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Antonio', sans-serif;
  color: ${theme.colors.darkGreen};
  width: 100%;

  .demand-infos {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    text-align: center;
    font-size: 16px;
    font-weight: ${theme.fontWeights.bold};

    @media (min-width: ${theme.breakpoints.tablet}) {
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: 24px;
      gap: 5px 15px;
      align-items: center;
    }

    > p > span {
      font-family: 'Sacramento', cursive;
    }
  }

  .description {
    margin: 15px 0;
    font-size: 12px;
    min-height: 100px;

    @media (min-width: ${theme.breakpoints.tablet}) {
      min-height: 200px;
    }

    > p:first-child {
      font-weight: ${theme.fontWeights.bold};
      margin-bottom: 10px;
    }

    > p:last-child {
      text-align: justify;
    }

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 16px;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 0 10px;
  }

  .button {
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    border: none;
    height: 40px;
    transition: all .5s;
    font-size: 12px;
    font-weight: ${theme.fontWeights.bold};
    padding: 0 10px;
    width: 100%;
    font-family: 'Antonio', sans-serif;

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 16px;
    }

    &.register {
      background-color: ${theme.colors.blackGray};
      color: ${theme.colors.lightGreen};

      &:hover {
        background-color: ${theme.colors.blackGrayHover};
      }
    }
    
    &.recommendation {
      background-color: ${theme.colors.darkGreen};
      color: ${theme.colors.lightGreen};

      &:hover {
        background-color: ${theme.colors.darkGreenHover};
      }
    }
  }
`