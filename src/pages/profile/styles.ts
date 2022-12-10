import theme from "@styles/theme";
import styled from "styled-components";

export const ContainerProfile = styled.section`
  font-family: 'Antonio', sans-serif;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 160px;
    margin-bottom: 50px;
  }

  .button-disable-profile {
    background-color: ${theme.colors.error};
    height: 50px;
    color: ${theme.colors.lightGray};
    border-radius: 20px;
    cursor: pointer;
    border: none;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: ${theme.fontWeights.bold};
    margin: 50px 0;
    transition: all .5s;

    &:hover {
      background-color: ${theme.colors.errorHover};
    }
  }
`

export const InfosProfile = styled.article`
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 0 30px;
    margin-bottom: 40px;
  }

  .button {
    border: none;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
    font-size: 12px;
    font-family: 'Antonio', sans-serif;
    height: 40px;
    transition: all .5s;
    width: 100%;

    @media (min-width: ${theme.breakpoints.tablet}) {
      width: 295px;
    }

    &.image-button {
      width: 100%;
    }

    &.primary {
      background-color: ${theme.colors.darkGreen};
      color: ${theme.colors.lightGreen};
      font-size: 16px;

      &:hover {
        background-color: ${theme.colors.darkGreenHover};
      }
    }

    &.secondary {
      background-color: ${theme.colors.green};
      color: ${theme.colors.lightGray};

      &:hover {
        background-color: ${theme.colors.greenHover};
      }
    }

    &.tertiary {
      background-color: ${theme.colors.blackGray};
      color: ${theme.colors.lightGreen};
      font-size: 16px;

      &:hover {
        background-color: ${theme.colors.blackGrayHover};
      }
    }
  }
`

export const ImageProfile = styled.div`
  margin-bottom: 30px;
  width: 100%;

  input[type='file'] {
    display: none;
  }

  .image-button {
    padding: 12px 145px;

    @media (min-width: ${theme.breakpoints.tablet}){
      padding: 12px 130px;
    }
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.darkGreen};
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    width: 100%;
    min-height: 250px;
    margin-bottom: 30px;

    @media (min-width: ${theme.breakpoints.tablet}) {
      height: 310px;
      width: 310px;
    }
  }
`

export const DataProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px 0;
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: 20px 0;
  }

  .input-profile {
    background-color: ${theme.colors.lightGray};
    border: none;
    border-radius: 20px;
    color: ${theme.colors.darkGreen};
    height: 40px;
    font-family: 'Antonio', sans-serif;
    padding-left: 20px;
    outline: none;
    width: 100%;
  }

  .wrapper-content {
    display: flex;
    flex-direction: column;
    gap: 5px 0;

    @media (min-width: ${theme.breakpoints.tablet}) {
      border: none;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 0 20px;
    }

    &__title {
      font-size: 14px;
      text-align: center;

      @media (min-width: ${theme.breakpoints.tablet}) {
        font-size: 18px;
      }
    }

    &__stars {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      border: none;
      border-radius: 20px;
      background-color: ${theme.colors.lightGray};

      @media (min-width: ${theme.breakpoints.tablet}) {
        width: 465px;
      }
    }

    &__input {
      @media (min-width: ${theme.breakpoints.tablet}) {
        width: 295px;
      }
    }
  }

  .wrapper-address {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px 10px;

    &__input {
      width: calc(50% - 5px)
    }
  }
`

export const DescriptionUser = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  margin-top: 30px;
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 0;
  }

  .description-user {
    background-color: ${theme.colors.lightGray};
    border-color: ${theme.colors.darkGreen};
    border-radius: 20px;
    resize: none;
    height: 100px;
    font-family: 'Antonio', sans-serif;
    outline: none;
    width: 100%;
    padding: 10px 15px;
  }
`

export const Skills = styled.article`
  display: flex;
  flex-direction: column;
  font-family: 'Antonio', sans-serif;
  margin-top: 50px;

  h2 {
    font-size: 18px;
    text-decoration: underline;
    margin-bottom: 15px;
  }

  .wrapper-skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0 10px;
    width: 100%;
  }
`

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  font-family: "Antonio", sans-serif;
  font-weight: ${theme.fontWeights.bold};
  justify-content: center;
  align-items: center;
  width: 100%;

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    
    .button {
      border: none;
      border-radius: 20px;
      outline: none;
      height: 30px;
      cursor: pointer;
      transition: all .5s;
      width: 100%;

      &.yes {
        background-color: ${theme.colors.blackGray};
        color: ${theme.colors.lightGreen};

        &:hover {
          background-color: ${theme.colors.blackGrayHover};
        }
      }

      &.no {
        background-color: ${theme.colors.darkGreen};
        color: ${theme.colors.lightGreen};

        &:hover {
          background-color: ${theme.colors.darkGreenHover};
        }
      }
    }
  }
`
